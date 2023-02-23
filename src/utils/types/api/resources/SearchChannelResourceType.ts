import {ThumbnailsType} from "../ThumbnailsType";

export type SearchChannelResourceType = {
    kind: "youtube#searchResult",
    etag: string,
    id: {
        kind: "youtube#channel",
        channelId: string
    },
    snippet: {
        publishedAt: string,
        channelId: string,
        title: string,
        description: string,
        thumbnails: ThumbnailsType,
        channelTitle: string,
        liveBroadcastContent: string,
        publishTime: string
    }
}
