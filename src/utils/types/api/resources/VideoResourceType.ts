import {ThumbnailsType} from "../ThumbnailsType";

export type VideoResourceType = {
    kind: "youtube#video",
    etag: string,
    id: string,
    snippet: {
        publishedAt: string,
        channelId: string,
        title: string,
        description: string,
        thumbnails: ThumbnailsType,
        channelTitle: string,
        tags: [
            string
        ],
        categoryId: string,
        liveBroadcastContent: string,
        defaultLanguage: string,
        localized: {
            title: string,
            description: string
        },
        defaultAudioLanguage: string
    },

    statistics: {
        viewCount: number,
        likeCount: number,
        dislikeCount: string,
        favoriteCount: string,
        commentCount: string
    },

}
