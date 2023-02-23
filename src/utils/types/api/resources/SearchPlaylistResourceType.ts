import {ThumbnailsType} from "../ThumbnailsType";

export type SearchPlaylistResourceType = {
    kind: "youtube#searchResult",
    etag: string
    id: {
        kind: "youtube#playlist",
        playlistId: string
    },
    "snippet": {
        publishedAt: string,
        channelId: string,
        title: string,
        description: string,
        thumbnails: ThumbnailsType,
        "channelTitle": string,
        "liveBroadcastContent": string,
        "publishTime": string
    }
}
