export interface PackageSummary {
    name: string;
    version: string;
    description: string;
    keywords?: string[];
    maintenance: number;
    popularity: number;
    quality: number;
}