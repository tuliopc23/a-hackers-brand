import FlexSearch, { Index } from 'flexsearch';

// TypeScript interfaces for search documents
type SearchDocumentType =
	| 'component'
	| 'webgl'
	| 'guidelines'
	| 'design-system'
	| 'documentation'
	| 'tutorial'
	| 'article'
	| 'blog'
	| 'other';
type SearchCategory = 'Components' | 'WebGL' | 'Guidelines' | 'Design System' | 'Documentation' | 'All';

interface SearchDocument {
	title: string;
	content: string;
	type: SearchDocumentType;
	category?: string;
	path: string;
	keywords: string[];
	score?: number;
	preview?: string;
}

interface SearchAnalytics {
	query: string;
	timestamp: number;
	resultsCount: number;
	selectedResult?: string;
}

interface SearchSuggestion {
	text: string;
	type: 'recent' | 'popular' | 'suggestion';
	count?: number;
}

interface SearchSettings {
	maxRecentSearches: number;
	maxPopularTerms: number;
	enableAnalytics: boolean;
	fuzzyThreshold: number;
}

// Enhanced search index with analytics and fuzzy matching
class SearchIndex {
	private index: Index<SearchDocument>;
	private documents: Map<string, SearchDocument> = new Map();
	private settings: SearchSettings;
	private popularTerms: Map<string, number> = new Map();

	constructor(settings: Partial<SearchSettings> = {}) {
		this.settings = {
			maxRecentSearches: 10,
			maxPopularTerms: 20,
			enableAnalytics: true,
			fuzzyThreshold: 0.7,
			...settings
		};

		this.index = new FlexSearch.Index<SearchDocument>({
			tokenize: 'forward',
			resolution: 5,
			depth: 3,
			document: {
				id: 'path',
				index: ['title', 'content', 'keywords', 'category']
			}
		});

		this.loadAnalytics();
	}

	addDocument(doc: SearchDocument) {
		// Generate preview
		const preview = this.generatePreview(doc.content);
		const enrichedDoc = { ...doc, preview };

		this.index.add(enrichedDoc);
		this.documents.set(doc.path, enrichedDoc);
	}

	search(
		query: string,
		options: {
			category?: SearchCategory;
			maxResults?: number;
			includeFuzzy?: boolean;
		} = {}
	): SearchDocument[] {
		const { category = 'All', maxResults = 10, includeFuzzy = true } = options;

		if (!query.trim()) return [];

		// Track search analytics
		this.trackSearch(query);

		// Normalize query
		const normalizedQuery = this.normalizeQuery(query);

		// Primary search
		let results = this.index.search(normalizedQuery, {
			enrich: true,
			limit: maxResults * 2 // Get more for filtering
		}) as SearchDocument[];

		// Fuzzy matching if enabled and few results
		if (includeFuzzy && results.length < maxResults / 2) {
			const fuzzyResults = this.fuzzySearch(normalizedQuery);
			results = [...results, ...fuzzyResults];
		}

		// Filter by category
		if (category !== 'All') {
			results = results.filter((doc) => this.getCategoryFromType(doc.type) === category || doc.category === category);
		}

		// Remove duplicates and limit results
		const uniqueResults = Array.from(new Map(results.map((doc) => [doc.path, doc])).values());

		return uniqueResults.slice(0, maxResults);
	}

	private fuzzySearch(query: string): SearchDocument[] {
		const fuzzyResults: Array<{ doc: SearchDocument; score: number }> = [];

		for (const doc of this.documents.values()) {
			const titleScore = this.calculateFuzzyScore(query, doc.title.toLowerCase());
			const contentScore = this.calculateFuzzyScore(query, doc.content.toLowerCase()) * 0.5;
			const keywordScore =
				Math.max(...doc.keywords.map((keyword) => this.calculateFuzzyScore(query, keyword.toLowerCase()))) * 0.7;

			const maxScore = Math.max(titleScore, contentScore, keywordScore);

			if (maxScore >= this.settings.fuzzyThreshold) {
				fuzzyResults.push({ doc, score: maxScore });
			}
		}

		return fuzzyResults.sort((a, b) => b.score - a.score).map((result) => ({ ...result.doc, score: result.score }));
	}

	private calculateFuzzyScore(query: string, text: string): number {
		if (text.includes(query)) return 1.0;

		// Levenshtein distance based scoring
		const distance = this.levenshteinDistance(query, text);
		const maxLength = Math.max(query.length, text.length);
		return Math.max(0, 1 - distance / maxLength);
	}

	private levenshteinDistance(a: string, b: string): number {
		const matrix = Array(b.length + 1)
			.fill(null)
			.map(() => Array(a.length + 1).fill(null));

		for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
		for (let j = 0; j <= b.length; j++) matrix[j][0] = j;

		for (let j = 1; j <= b.length; j++) {
			for (let i = 1; i <= a.length; i++) {
				const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
				matrix[j][i] = Math.min(matrix[j][i - 1] + 1, matrix[j - 1][i] + 1, matrix[j - 1][i - 1] + indicator);
			}
		}

		return matrix[b.length][a.length];
	}

	private getCategoryFromType(type: SearchDocumentType): SearchCategory {
		const categoryMap: Record<SearchDocumentType, SearchCategory> = {
			component: 'Components',
			webgl: 'WebGL',
			guidelines: 'Guidelines',
			'design-system': 'Design System',
			documentation: 'Documentation',
			tutorial: 'Documentation',
			article: 'Documentation',
			blog: 'Documentation',
			other: 'Documentation'
		};
		return categoryMap[type] || 'Documentation';
	}

	private generatePreview(content: string): string {
		const cleanContent = content.replace(/[#*`\[\]]/g, '').trim();
		return cleanContent.length > 150 ? cleanContent.slice(0, 150) + '...' : cleanContent;
	}

	private normalizeQuery(query: string): string {
		return query.trim().toLowerCase();
	}

	private trackSearch(query: string): void {
		if (!this.settings.enableAnalytics) return;

		const normalizedQuery = this.normalizeQuery(query);

		// Update popular terms (privacy-respecting - no personal data)
		const currentCount = this.popularTerms.get(normalizedQuery) || 0;
		this.popularTerms.set(normalizedQuery, currentCount + 1);

		// Store recent search
		this.storeRecentSearch(normalizedQuery);

		// Save analytics
		this.saveAnalytics();
	}

	private storeRecentSearch(query: string): void {
		if (typeof window === 'undefined') return;

		try {
			const recent = this.getRecentSearches();
			const updated = [query, ...recent.filter((q) => q !== query)].slice(0, this.settings.maxRecentSearches);

			localStorage.setItem('ahb-recent-searches', JSON.stringify(updated));
		} catch (error) {
			// Failed to store recent search - user can still search without history
		}
	}

	getRecentSearches(): string[] {
		if (typeof window === 'undefined') return [];

		try {
			const stored = localStorage.getItem('ahb-recent-searches');
			return stored ? JSON.parse(stored) : [];
		} catch (error) {
			// Failed to get recent searches - return empty array
			return [];
		}
	}

	getPopularTerms(): Array<{ term: string; count: number }> {
		return Array.from(this.popularTerms.entries())
			.map(([term, count]) => ({ term, count }))
			.sort((a, b) => b.count - a.count)
			.slice(0, this.settings.maxPopularTerms);
	}

	getSuggestions(query: string): SearchSuggestion[] {
		const suggestions: SearchSuggestion[] = [];
		const normalizedQuery = query.toLowerCase();

		if (!query.trim()) {
			// Show recent searches when no query
			const recent = this.getRecentSearches();
			suggestions.push(
				...recent.map((term) => ({
					text: term,
					type: 'recent' as const
				}))
			);

			// Add popular terms
			const popular = this.getPopularTerms().slice(0, 5);
			suggestions.push(
				...popular.map(({ term, count }) => ({
					text: term,
					type: 'popular' as const,
					count
				}))
			);
		} else {
			// Filter suggestions based on query
			const recent = this.getRecentSearches()
				.filter((term) => term.includes(normalizedQuery))
				.slice(0, 3);

			suggestions.push(
				...recent.map((term) => ({
					text: term,
					type: 'recent' as const
				}))
			);

			// Add matching popular terms
			const popular = this.getPopularTerms()
				.filter(({ term }) => term.includes(normalizedQuery))
				.slice(0, 3);

			suggestions.push(
				...popular.map(({ term, count }) => ({
					text: term,
					type: 'popular' as const,
					count
				}))
			);

			// Add suggestions from document titles and keywords
			const documentSuggestions = Array.from(this.documents.values())
				.flatMap((doc) => [doc.title.toLowerCase(), ...doc.keywords.map((k) => k.toLowerCase())])
				.filter((text) => text.includes(normalizedQuery) && text !== normalizedQuery)
				.slice(0, 2);

			suggestions.push(
				...documentSuggestions.map((text) => ({
					text,
					type: 'suggestion' as const
				}))
			);
		}

		// Remove duplicates
		const unique = suggestions.filter(
			(suggestion, index, arr) => arr.findIndex((s) => s.text === suggestion.text) === index
		);

		return unique.slice(0, 8);
	}

	clearRecentSearches(): void {
		if (typeof window === 'undefined') return;
		try {
			localStorage.removeItem('ahb-recent-searches');
		} catch (error) {
			// Failed to clear recent searches - operation will be silent
		}
	}

	private loadAnalytics(): void {
		if (typeof window === 'undefined' || !this.settings.enableAnalytics) return;

		try {
			const stored = localStorage.getItem('ahb-search-analytics');
			if (stored) {
				const data = JSON.parse(stored);
				this.popularTerms = new Map(data.popularTerms || []);
			}
		} catch (error) {
			// Failed to load search analytics - will use defaults
		}
	}

	private saveAnalytics(): void {
		if (typeof window === 'undefined' || !this.settings.enableAnalytics) return;

		try {
			const data = {
				popularTerms: Array.from(this.popularTerms.entries()),
				lastUpdated: Date.now()
			};
			localStorage.setItem('ahb-search-analytics', JSON.stringify(data));
		} catch (error) {
			// Failed to save search analytics - analytics will be lost
		}
	}

	highlight(document: SearchDocument, query: string): string {
		const normalizedQuery = this.normalizeQuery(query);
		const regex = new RegExp(`(${normalizedQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
		return document.content.replace(
			regex,
			'<mark class="bg-terminal-cyan/30 text-terminal-cyan rounded px-1">$1</mark>'
		);
	}

	getAvailableCategories(): SearchCategory[] {
		return ['All', 'Components', 'WebGL', 'Guidelines', 'Design System', 'Documentation'];
	}
}

// Debounce function to improve search performance with frequent user input
function debounce<T extends (...args: any[]) => any>(
	func: T,
	wait: number
): (this: ThisParameterType<T>, ...args: Parameters<T>) => void {
	let timeout: NodeJS.Timeout;
	return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
		clearTimeout(timeout);
		timeout = setTimeout(() => func.apply(this, args), wait);
	};
}

// Throttle function for performance-critical operations
function throttle<T extends (...args: any[]) => any>(
	func: T,
	limit: number
): (this: ThisParameterType<T>, ...args: Parameters<T>) => void {
	let inThrottle: boolean;
	return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
		if (!inThrottle) {
			func.apply(this, args);
			inThrottle = true;
			setTimeout(() => (inThrottle = false), limit);
		}
	};
}

export {
	SearchDocument,
	SearchIndex,
	SearchAnalytics,
	SearchSuggestion,
	SearchCategory,
	SearchSettings,
	debounce,
	throttle
};
