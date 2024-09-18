import type { PackageSummary } from "../api/types/packageSummary";
import { Link } from "react-router-dom";


interface PackageListItemProps {
    packg: PackageSummary;
}

export default function PackageListItem({packg}: PackageListItemProps) {
    const { name, description, keywords = [], popularity, quality, maintenance } = packg;

    const renderedKeywords = (keywords || []).map((keyword) => {
        return <div key={keyword} className="border py-0.5 px-1 text-xs bg-slate-300 rounded">
                    {keyword}
                </div>
    })

    const renderedPercentage = (value: number) => Math.round(value * 100);

    const getPercentageClass = (value: number) => {
        return renderedPercentage(value) < 10 ? "text-red-500 font-bold" : "text-gray-500";
    };

    return (
        <div className="border p-4 rounded flex justify-between items-center bg-slate-100">
            <div className="flex flex-col w-3/4 gap-2">
                <Link to={`/packages/${name}`} className="text-xl font-bold">
                    {name}
                </Link>
                <p className="text-sm text-gray-500">
                    {description}
                </p>
                <div className="flex gap-1 flex-wrap">
                    {renderedKeywords}
                </div>
            </div>
            <div className="mr-2">
                <div className="pb-4">
                    <p className={`text-sm ${getPercentageClass(popularity)}`}>
                        Popularity - {renderedPercentage(popularity)}%
                    </p>
                    <p className={`text-sm ${getPercentageClass(quality)}`}>
                        Quality - {renderedPercentage(quality)}%
                    </p>
                    <p className={`text-sm ${getPercentageClass(maintenance)}`}>
                        Maintenance - {renderedPercentage(maintenance)}%
                    </p>
                </div>
        
                <Link 
                    to={`/packages/${packg.name}`} 
                    className="py-2 px-3 rounded bg-blue-500 text-white text-lg"
                    >
                    View
                </Link>
                <a
                    href={`https://npmjs.com/package/${name}`}
                    className="py-2 px-3 rounded bg-blue-500 text-white text-lg ml-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Go to NPM page for ${name}`}
                >
                    NPM Page
                </a>
            </div>
          
        </div>
    )
};