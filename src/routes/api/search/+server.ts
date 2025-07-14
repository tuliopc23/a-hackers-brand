import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import { SearchIndex } from '$lib/utils/search';

// Load the search index from file
const searchIndexPath = path.resolve('src/lib/search/search-index.json');
const searchIndexData = JSON.parse(fs.readFileSync(searchIndexPath, 'utf-8'));
const searchIndex = new SearchIndex();

// Add documents to FlexSearch index
searchIndexData.documents.forEach((doc) => {
	searchIndex.addDocument(doc);
});

export async function GET({ url }) {
	try {
		const query = url.searchParams.get('query')?.trim();
		const pageParam = parseInt(url.searchParams.get('page') || '1', 10);
		const pageSize = 10;

		if (!query) {
			return json({ results: [], total: 0, message: 'No query provided.' }, { status: 400 });
		}

		// Search for the query in the index
		const fullResults = searchIndex.search(query);

		// Paginate results
		const total = fullResults.length;
		const pages = Math.ceil(total / pageSize);
		const page = Math.min(pageParam, pages);
		const start = (page - 1) * pageSize;
		const end = start + pageSize;
		const results = fullResults.slice(start, end);

		// Return results
		return json(
			{ results, total, page, pages },
			{
				headers: {
					'Cache-Control': 'public, max-age=600' // Cache response for 10 minutes
				}
			}
		);
	} catch (error) {
		// Log error to monitoring service instead of console
		return json({ error: 'An error occurred while processing your search request.' }, { status: 500 });
	}
}
