import type { Params } from "react-router-dom";
import type { PackageDetails } from "../../api/types/packageDetails";
import { getPackage } from "../../api/queries/getPackage";


interface LoaderArgs {
    params: Params
}

export interface DetailsLoaderResult {
    details: PackageDetails;
}

export async function detailsLoader({params}: LoaderArgs ): Promise<DetailsLoaderResult> { 
    const {name} = params;

    if(!name) {
        throw new Error("Name needs to be provided")
    }
    const details = await getPackage(name)
    return {
        details
    };
};
