import {ThumbnailsType} from "../ThumbnailsType";

export type SearchVideoResourceType = {
    kind: "youtube#searchResult",
    etag: string,
    id: {
        kind: "youtube#video",
        videoId: string
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
