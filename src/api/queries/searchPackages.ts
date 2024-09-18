import type { PackageSummary } from "../types/packageSummary";


interface SearchResponse{
    objects: {
        package: {
            name: string;
            description: string;
            version: string;
            keywords:string[]
        },
        score: {
            detail: {
                maintenance: number;
                popularity: number;
                quality: number;
            }
        }
    }[]
}

export async function searchPackages(term: string): Promise<PackageSummary[]> {
    const res = await fetch(
        `https://registry.npmjs.org/-/v1/search?text=${term}`
      );

      const data: SearchResponse = await res.json();

      return data.objects.map(({ package: { name, description, version, keywords }, score: { detail: { maintenance, popularity, quality } } }) => {
        return {
            name,
            description,
            version,
            keywords,
            popularity: popularity,
            quality: quality,
            maintenance: maintenance
        }
      }
    )
};