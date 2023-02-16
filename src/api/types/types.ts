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

type thumbnailsType = {
    default?: { url: string, width: number, height: number }
    medium?: { url: string, width: number, height: number }
    high?: { url: string, width: number, height: number }
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
        thumbnails: thumbnailsType,
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
        thumbnails: thumbnailsType,
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
        thumbnails: thumbnailsType,
        channelTitle: string,
        liveBroadcastContent: string,
        publishTime: string
    }
}

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

export type ChannelResourceType = {
    kind: "youtube#channel",
    etag: string,
    id: string,
    snippet: {
        title: string,
        description: string,
        customUrl: string,
        publishedAt: Date,
        thumbnails: thumbnailsType,
        defaultLanguage: string,
        localized: {
            title: string,
            description: string
        },
        country: string
    },
    contentDetails: {
        relatedPlaylists: {
            likes: string,
            favorites: string,
            uploads: string
        }
    },
    statistics: {
        viewCount: number,
        subscriberCount: number,  // this value is rounded to three significant figures
        hiddenSubscriberCount: boolean,
        videoCount: number
    },
    topicDetails: {
        topicIds: [
            string
        ],
        topicCategories: [
            string
        ]
    },
    status: {
        privacyStatus: string,
        isLinked: boolean,
        longUploadsStatus: string,
        madeForKids: boolean,
        selfDeclaredMadeForKids: boolean
    },
    brandingSettings: {
        channel: {
            title: string,
            description: string,
            keywords: string,
            trackingAnalyticsAccountId: string,
            moderateComments: boolean,
            unsubscribedTrailer: string,
            defaultLanguage: string,
            country: string
        },
        watch: {
            textColor: string,
            backgroundColor: string,
            featuredPlaylistId: string
        }
    },
    auditDetails: {
        "overallGoodStanding": boolean,
        "communityGuidelinesGoodStanding": boolean,
        "copyrightStrikesGoodStanding": boolean,
        "contentIdClaimsGoodStanding": boolean
    },
    contentOwnerDetails: {
        contentOwner: string,
        timeLinked: Date
    },
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
        thumbnails: thumbnailsType,
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


