import {RequestParamsType} from "./RequestParamsType";
import {VideoPartType} from "../parts/VideoPartType";

export type VideoReguestParamsType = RequestParamsType & {
    part?:  VideoPartType[];
    chart: "mostPopular";
    id?: string;
    videoCategoryId?: string;
}