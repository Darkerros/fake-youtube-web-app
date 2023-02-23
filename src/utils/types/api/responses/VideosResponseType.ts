import {VideoResourceType} from "../resources/VideoResourceType";

export type VideosResponseType = {
    kind: "youtube#videoListResponse",
    etag: string,
    nextPageToken: string,
    prevPageToken: string,
    pageInfo: {
        totalResults: number,
        resultsPerPage: number
    },
    items: VideoResourceType[]
}
