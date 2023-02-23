import {ChannelResourceType} from "../resources/ChannelResourceType";

export type ChannelResponseType = {
    kind: "youtube#channelListResponse",
    etag: string,
    nextPageToken: string,
    prevPageToken: string,
    pageInfo: {
        totalResults: number,
        resultsPerPage: number
    },
    items: ChannelResourceType[]
}
