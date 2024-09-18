import type { PackageSummary } from "../api/types/packageSummary";
import { Link } from "react-router-dom";


interface PackageListItemProps {
    packg: PackageSummary;
}

export default function PackageListItem({packg}: PackageListItemProps) {
    const renderedKeywords = (packg.keywords || []).map((keyword) => {
        return <div key={keyword} className="border py-0.5 px-1 text-xs bg-slate-300 rounded">
                    {keyword}
                </div>
    })

    const popularityPercent = Math.round(packg.popularity*100);
    const qualityPercent = Math.round(packg.quality*100);
    const maintenancePercent = Math.round(packg.maintenance*100);

    return (
        <div className="border p-4 rounded flex justify-between items-center bg-slate-100">
            <div className="flex flex-col w-3/4 gap-2">
                <Link to={`/packages/${packg.name}`} className="text-xl font-bold">
                    {packg.name}
                </Link>
                <p className="text-sm text-gray-500">
                    {packg.description}
                </p>
                <div className="flex gap-1 flex-wrap">
                    {renderedKeywords}
                </div>
            </div>
            <div className="mr-2">
                <div className="pb-4">
                    <p className="text-sm text-gray-500">
                        Popularity - {popularityPercent}%
                    </p>
                    <p className="text-sm text-gray-500">
                        Quality - {qualityPercent}%
                    </p>
                    <p className="text-sm text-gray-500">
                        Maintenance - {maintenancePercent}%
                    </p>
                </div>
        
                <Link to={`/packages/${packg.name}`} className="py-2 px-3 rounded bg-blue-500 text-white text-lg">
                    View
                </Link>
            </div>
          
        </div>
    )
};