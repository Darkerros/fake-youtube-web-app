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

export type SearchResourceType = {
    kind: "youtube#searchResult",
    etag: string,
    id: {
        kind: string,
        videoId: string,
        channelId: string,
        playlistId: string
    },
    snippet: {
        publishedAt: Date,
        channelId: string,
        title: string,
        description: string,
        thumbnails: {
            (key:string): {
                url: string,
                width: number,
                height: number
            }
        },
        channelTitle: string,
        liveBroadcastContent: string
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
            (key:string): {
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


