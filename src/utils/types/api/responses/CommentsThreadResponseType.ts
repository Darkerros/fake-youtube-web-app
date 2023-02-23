import {CommentsThreadResourceType} from "../resources/CommentsThreadResourceType";

export type CommentsThreadResponseType = {
    kind: "youtube#commentThreadListResponse",
    etag: string,
    nextPageToken: string,
    pageInfo: {
        totalResults: number,
        resultsPerPage: number
    },
    items: CommentsThreadResourceType[]
}
