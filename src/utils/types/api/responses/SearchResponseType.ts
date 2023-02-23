import {SearchResourceType} from "../resources/SearchResourceType";

export type SearchResponseType<T = SearchResourceType> = {
    etag: string
    kind: string
    items: T[]
    nextPageToken: string
    prevPageToken: string,
    pageInfo: {
        totalResults: number,
        resultsPerPage: number
    },
    regionCode: string
}
