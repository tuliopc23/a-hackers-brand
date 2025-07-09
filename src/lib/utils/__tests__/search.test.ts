import { describe, it, expect } from 'vitest';
import { SearchIndex, SearchDocument, SearchCategory } from '../search';

describe('SearchIndex', () => {
	const dummyDocuments: SearchDocument[] = [
		{
			title: 'Document 1',
			content: 'Content about Svelte',
			type: 'documentation',
			path: '/docs/doc1',
			keywords: ['svelte', 'documentation']
		},
		{
			title: 'Document 2',
			content: 'Content about Components',
			type: 'component',
			path: '/components/doc2',
			keywords: ['ui', 'components']
		}
	];

	const searchIndex = new SearchIndex();
	dummyDocuments.forEach((doc) => searchIndex.addDocument(doc));

	it('should return documents matching the query', () => {
		const results = searchIndex.search('Svelte');
		expect(results).toHaveLength(1);
		expect(results[0].title).toBe('Document 1');
	});

	it('should handle empty queries gracefully', () => {
		const results = searchIndex.search('');
		expect(results).toHaveLength(0);
	});

	it('should consider keywords during search', () => {
		const results = searchIndex.search('components');
		expect(results).toHaveLength(1);
		expect(results[0].title).toBe('Document 2');
	});

	it('should support category filtering', () => {
		const results = searchIndex.search('doc', { category: 'Components' });
		expect(results).toHaveLength(1);
		expect(results[0].title).toBe('Document 2');
	});
});
