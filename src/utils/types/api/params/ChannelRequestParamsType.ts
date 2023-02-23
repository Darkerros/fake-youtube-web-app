import {ChannelPartType} from "../parts/ChannelPartType";
import {RequestParamsType} from "./RequestParamsType";

export type ChannelRequestParamsType = RequestParamsType & {
    part: ChannelPartType[]
    forUsername?: string
    id: string
}
