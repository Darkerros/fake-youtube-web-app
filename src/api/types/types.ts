export type SearchResponseType = {
    etag: string
    kind: string
    items: SearchResourceType[]
    nextPageToken: string
    prevPageToken: string,
    pageInfo: {
        totalResults: number,
        resultsPerPage: number
    },
    regionCode: string
}

export type SearchResourceType = SearchVideoResourceType | SearchChannelResourceType | SearchPlaylistResourceType

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
        thumbnails: {
            (key?: "default" | "medium" | "high"): { url: string, width: number, height: number }
        },
        channelTitle: string,
        liveBroadcastContent: string,
        publishTime: string
    }
}

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
        thumbnails: {
            (key?: "default" | "medium" | "high"): { url: string, width: number, height: number }
        },
        "channelTitle": string,
        "liveBroadcastContent": string,
        "publishTime": string
    }
}

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
        thumbnails: {
            (key?: "default" | "medium" | "high"): { url: string, width: number, height: number }
        },
        channelTitle: string,
        liveBroadcastContent: string,
        publishTime: string
    }
}

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

export type VideoResourceType = {
    kind: "youtube#video",
    etag: string,
    id: string,
    snippet: {
        publishedAt: Date,
        channelId: string,
        title: string,
        description: string,
        thumbnails: {
            (key: string): {
                url: string,
                width: number,
                height: number
            }
        },
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
        viewCount: string,
        likeCount: string,
        dislikeCount: string,
        favoriteCount: string,
        commentCount: string
    },

}


