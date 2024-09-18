import type { SearchLoaderResult } from './searchLoader';
import { useLoaderData } from 'react-router-dom';
import PackageListItem from '../../components/PackageListItem';


export default function SearchPage() {
    const {searchResults} = useLoaderData() as SearchLoaderResult;
    const renderedResults = searchResults.map((result) => {
        return <PackageListItem packg={result} key={result.name} />
    })

    return <div>
        <h1 className="text-2x1 font-bold my-6 ml-4">Search Results</h1>
        <div className="space-y-4 mt-4 ml-4 mr-4">
            {renderedResults}
        </div>
    </div>;
}