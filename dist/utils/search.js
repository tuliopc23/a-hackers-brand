import FlexSearch, { Index } from 'flexsearch';
// Enhanced search index with analytics and fuzzy matching
class SearchIndex {
    index;
    documents = new Map();
    settings;
    popularTerms = new Map();
    constructor(settings = {}) {
        this.settings = {
            maxRecentSearches: 10,
            maxPopularTerms: 20,
            enableAnalytics: true,
            fuzzyThreshold: 0.7,
            ...settings
        };
        this.index = new FlexSearch.Index({
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
    addDocument(doc) {
        // Generate preview
        const preview = this.generatePreview(doc.content);
        const enrichedDoc = { ...doc, preview };
        this.index.add(enrichedDoc);
        this.documents.set(doc.path, enrichedDoc);
    }
    search(query, options = {}) {
        const { category = 'All', maxResults = 10, includeFuzzy = true } = options;
        if (!query.trim())
            return [];
        // Track search analytics
        this.trackSearch(query);
        // Normalize query
        const normalizedQuery = this.normalizeQuery(query);
        // Primary search
        let results = this.index.search(normalizedQuery, {
            enrich: true,
            limit: maxResults * 2 // Get more for filtering
        });
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
    fuzzySearch(query) {
        const fuzzyResults = [];
        for (const doc of this.documents.values()) {
            const titleScore = this.calculateFuzzyScore(query, doc.title.toLowerCase());
            const contentScore = this.calculateFuzzyScore(query, doc.content.toLowerCase()) * 0.5;
            const keywordScore = Math.max(...doc.keywords.map((keyword) => this.calculateFuzzyScore(query, keyword.toLowerCase()))) * 0.7;
            const maxScore = Math.max(titleScore, contentScore, keywordScore);
            if (maxScore >= this.settings.fuzzyThreshold) {
                fuzzyResults.push({ doc, score: maxScore });
            }
        }
        return fuzzyResults.sort((a, b) => b.score - a.score).map((result) => ({ ...result.doc, score: result.score }));
    }
    calculateFuzzyScore(query, text) {
        if (text.includes(query))
            return 1.0;
        // Levenshtein distance based scoring
        const distance = this.levenshteinDistance(query, text);
        const maxLength = Math.max(query.length, text.length);
        return Math.max(0, 1 - distance / maxLength);
    }
    levenshteinDistance(a, b) {
        const matrix = Array(b.length + 1)
            .fill(null)
            .map(() => Array(a.length + 1).fill(null));
        for (let i = 0; i <= a.length; i++)
            matrix[0][i] = i;
        for (let j = 0; j <= b.length; j++)
            matrix[j][0] = j;
        for (let j = 1; j <= b.length; j++) {
            for (let i = 1; i <= a.length; i++) {
                const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
                matrix[j][i] = Math.min(matrix[j][i - 1] + 1, matrix[j - 1][i] + 1, matrix[j - 1][i - 1] + indicator);
            }
        }
        return matrix[b.length][a.length];
    }
    getCategoryFromType(type) {
        const categoryMap = {
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
    generatePreview(content) {
        const cleanContent = content.replace(/[#*`\[\]]/g, '').trim();
        return cleanContent.length > 150 ? cleanContent.slice(0, 150) + '...' : cleanContent;
    }
    normalizeQuery(query) {
        return query.trim().toLowerCase();
    }
    trackSearch(query) {
        if (!this.settings.enableAnalytics)
            return;
        const normalizedQuery = this.normalizeQuery(query);
        // Update popular terms (privacy-respecting - no personal data)
        const currentCount = this.popularTerms.get(normalizedQuery) || 0;
        this.popularTerms.set(normalizedQuery, currentCount + 1);
        // Store recent search
        this.storeRecentSearch(normalizedQuery);
        // Save analytics
        this.saveAnalytics();
    }
    storeRecentSearch(query) {
        if (typeof window === 'undefined')
            return;
        try {
            const recent = this.getRecentSearches();
            const updated = [query, ...recent.filter((q) => q !== query)].slice(0, this.settings.maxRecentSearches);
            localStorage.setItem('ahb-recent-searches', JSON.stringify(updated));
        }
        catch (error) {
            console.warn('Failed to store recent search:', error);
        }
    }
    getRecentSearches() {
        if (typeof window === 'undefined')
            return [];
        try {
            const stored = localStorage.getItem('ahb-recent-searches');
            return stored ? JSON.parse(stored) : [];
        }
        catch (error) {
            console.warn('Failed to get recent searches:', error);
            return [];
        }
    }
    getPopularTerms() {
        return Array.from(this.popularTerms.entries())
            .map(([term, count]) => ({ term, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, this.settings.maxPopularTerms);
    }
    getSuggestions(query) {
        const suggestions = [];
        const normalizedQuery = query.toLowerCase();
        if (!query.trim()) {
            // Show recent searches when no query
            const recent = this.getRecentSearches();
            suggestions.push(...recent.map((term) => ({
                text: term,
                type: 'recent'
            })));
            // Add popular terms
            const popular = this.getPopularTerms().slice(0, 5);
            suggestions.push(...popular.map(({ term, count }) => ({
                text: term,
                type: 'popular',
                count
            })));
        }
        else {
            // Filter suggestions based on query
            const recent = this.getRecentSearches()
                .filter((term) => term.includes(normalizedQuery))
                .slice(0, 3);
            suggestions.push(...recent.map((term) => ({
                text: term,
                type: 'recent'
            })));
            // Add matching popular terms
            const popular = this.getPopularTerms()
                .filter(({ term }) => term.includes(normalizedQuery))
                .slice(0, 3);
            suggestions.push(...popular.map(({ term, count }) => ({
                text: term,
                type: 'popular',
                count
            })));
            // Add suggestions from document titles and keywords
            const documentSuggestions = Array.from(this.documents.values())
                .flatMap((doc) => [doc.title.toLowerCase(), ...doc.keywords.map((k) => k.toLowerCase())])
                .filter((text) => text.includes(normalizedQuery) && text !== normalizedQuery)
                .slice(0, 2);
            suggestions.push(...documentSuggestions.map((text) => ({
                text,
                type: 'suggestion'
            })));
        }
        // Remove duplicates
        const unique = suggestions.filter((suggestion, index, arr) => arr.findIndex((s) => s.text === suggestion.text) === index);
        return unique.slice(0, 8);
    }
    clearRecentSearches() {
        if (typeof window === 'undefined')
            return;
        try {
            localStorage.removeItem('ahb-recent-searches');
        }
        catch (error) {
            console.warn('Failed to clear recent searches:', error);
        }
    }
    loadAnalytics() {
        if (typeof window === 'undefined' || !this.settings.enableAnalytics)
            return;
        try {
            const stored = localStorage.getItem('ahb-search-analytics');
            if (stored) {
                const data = JSON.parse(stored);
                this.popularTerms = new Map(data.popularTerms || []);
            }
        }
        catch (error) {
            console.warn('Failed to load search analytics:', error);
        }
    }
    saveAnalytics() {
        if (typeof window === 'undefined' || !this.settings.enableAnalytics)
            return;
        try {
            const data = {
                popularTerms: Array.from(this.popularTerms.entries()),
                lastUpdated: Date.now()
            };
            localStorage.setItem('ahb-search-analytics', JSON.stringify(data));
        }
        catch (error) {
            console.warn('Failed to save search analytics:', error);
        }
    }
    highlight(document, query) {
        const normalizedQuery = this.normalizeQuery(query);
        const regex = new RegExp(`(${normalizedQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        return document.content.replace(regex, '<mark class="bg-terminal-cyan/30 text-terminal-cyan rounded px-1">$1</mark>');
    }
    getAvailableCategories() {
        return ['All', 'Components', 'WebGL', 'Guidelines', 'Design System', 'Documentation'];
    }
}
// Debounce function to improve search performance with frequent user input
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
// Throttle function for performance-critical operations
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}
export { SearchDocument, SearchIndex, SearchAnalytics, SearchSuggestion, SearchCategory, SearchSettings, debounce, throttle };
