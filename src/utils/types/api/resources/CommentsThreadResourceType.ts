import {CommentResourceType} from "./CommentResourceType";

export type CommentsThreadResourceType = {
    kind: "youtube#commentThread",
    etag: string,
    id: string,
    snippet: {
        channelId?: string,
        videoId: string,
        topLevelComment: CommentResourceType,
        canReply: boolean,
        totalReplyCount: number,
        isPublic: boolean
    },
    replies: {
        comments: CommentsThreadResourceType[]
    }
}
