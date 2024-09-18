import { useLoaderData, Link } from "react-router-dom";
import type { HomeLoaderResult } from "./homeLoader";


export default function HomePage() {
    const {featuredPackages} = useLoaderData() as HomeLoaderResult;

    const renderedPackages = featuredPackages.map((pckg) => {
        return <div key={pckg.name} className="flex flex-col justify-between gap-2 bg-gray-100 border rounded shadow p-4 ">
            <div className="flex flex-col gap-1 border-bottom border-gray-400">
                <div className="font-bold text-center">
                    {pckg.name}
                </div>
                <div className="text-sm text-gray-500">
                    {pckg.description}
                </div>
                <div className="text-sm text-gray-500">
                    {pckg.maintainers.length} - Maintainers
                </div>
            </div>
            <Link to={`/packages/${pckg.name}`} className="border rounded border-gray-900 text-center">
                View - {pckg.name}
            </Link>
            <a
                href={`https://npmjs.com/package/${pckg.name}`}
                className="border rounded border-gray-900 text-center"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Go to NPM page for ${pckg.name}`}
            >
                NPM Page
            </a>
        </div>
    })

    return (
        <div className="container py-12 space-y-8">
            <div className="space-y-6 text-center">
                <h1 className="text-6xl font-bold">
                    The NPM Registry
                </h1>
                <p className="mx-auto max-w-[600px] text-gray-500">
                    The package manager for Javascript.  Search and view packages.
                </p>
            </div>
            <div className="mx-auto grid grid-cols-4 max-w-[900px] items-stretch gap-4">
                {renderedPackages}
            </div>
        </div>
    )
}