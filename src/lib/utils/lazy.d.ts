export function lazy<T>(loader: () => Promise<T>): Promise<T>;
