export interface Book {
    id: string;
    title: string;
    author: string;
    coverUrl: string;
    category?: string;
    chapters?: number;
    description?: string;
    lastChapter?: string;
    updateTime?: string;
    progress?: number;
    views?: string;
    tags?: string[];
}
