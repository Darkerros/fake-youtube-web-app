import {RequestParamsType} from "./RequestParamsType";

export type CommentThreadRequestParamsType = RequestParamsType & {
    id?: string
    parentId?: string
    textFormat?: "html" | "plainText"
    channelId?: string
    videoId?: string
    order?: "time" | "relevance"
}
