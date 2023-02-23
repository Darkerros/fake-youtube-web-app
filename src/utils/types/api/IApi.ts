import {AxiosResponse} from "axios";
import {METHOD} from "./METHOD";
import {SearchResponseType} from "./responses/SearchResponseType";
import {SearchParamsType} from "./params/SearchParamsType";
import {VideoReguestParamsType} from "./params/VideoReguestParamsType";
import {VideosResponseType} from "./responses/VideosResponseType";
import {ChannelResponseType} from "./responses/ChannelResponseType";
import {ChannelRequestParamsType} from "./params/ChannelRequestParamsType";
import {CommentThreadRequestParamsType} from "./params/CommentThreadRequestParamsType";
import {CommentsThreadResponseType} from "./responses/CommentsThreadResponseType";
import {SearchVideoResourceType} from "./resources/SearchVideoResourceType";

export interface IApi {
    createReguest: (method: METHOD,endpoint: string, params ?: any ) => Promise<AxiosResponse>
    checkResponse: (resp: AxiosResponse) => Promise<any>
    search: (params: SearchParamsType) => Promise<SearchResponseType>
    videos: (params: VideoReguestParamsType) => Promise<VideosResponseType>
    getVideoById: (id:VideoReguestParamsType["id"]) => Promise<VideosResponseType>
    getVideosInformationByIdList: (idList: string[]) => Promise<VideosResponseType>
    getReccomendVideosByCategoryId: (categoryId:VideoReguestParamsType["videoCategoryId"]) => Promise<VideosResponseType>
    channel: (channelId: ChannelRequestParamsType["id"]) => Promise<ChannelResponseType>
    getVideoCommentsByVideoId: (videoId: CommentThreadRequestParamsType["videoId"]) => Promise<CommentsThreadResponseType>
    getChannelVideo: (channelId: string) => Promise<SearchResponseType<SearchVideoResourceType>>
}