import {RequestParamsType} from "./RequestParamsType";

export type SearchParamsType = RequestParamsType & {
    order?: "date" | "rating" | "relevance" | "title" | "videoCount" | "viewCount"
    channelId?: string,
    relatedToVideoId?: string,
    type?: "channel" | "playlist" | "video"
    videoCategoryId?: string
    videoDuration?: "any" | "long" | "medium" | "short"
    q?: string
}
