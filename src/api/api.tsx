import axios, {AxiosRequestConfig} from "axios";
import {IApi} from "../utils/types/api/IApi";
import {METHOD} from "../utils/types/api/METHOD";

const API_BASE_URL = "https://www.googleapis.com/youtube/v3"
const API_CLIENT_TOKEN = "AIzaSyDaMCm6KP65A33wynsFBnIwMpdqY_wACMA"

export const api: IApi = {

    createReguest: (method, endpoint,params) => {
        const config: AxiosRequestConfig = {
            params: {key: API_CLIENT_TOKEN,maxResults: 50,regionCode: "ru",...params}
        }

        switch (method) {
            case METHOD.GET:
                return axios.get(`${API_BASE_URL}${endpoint}`,config)

            case METHOD.POST:
                return axios.post(`${API_BASE_URL}${endpoint}`,config)

            case METHOD.DELETE:
                return axios.delete(`${API_BASE_URL}${endpoint}`,config)

            default:
                return axios.get(`${API_BASE_URL}${endpoint}`,config)
        }
    },

    checkResponse: (res) => res.data,

    search: (params) => {
        return api.createReguest(METHOD.GET,"/search",{part: "snippet,id", ...params}).then(api.checkResponse)
    },

    videos: (params) => {
        return api.createReguest(METHOD.GET,"/videos",{...params,part: params.part?.length ? `snippet,statistics,id,${params.part.join(",")}` : "snippet,statistics,id"}).then(api.checkResponse)
    },

    getVideoById: (id) => {
        return api.createReguest(METHOD.GET,"/videos",{id: id, part: "snippet,statistics,id"}).then(api.checkResponse)
    },

    getReccomendVideosByCategoryId: (categoryId) => {
        return api.createReguest(METHOD.GET,"/videos",{videoCategoryId:categoryId,chart: "mostPopular", part: "snippet,statistics,id"}).then(api.checkResponse)
    },

    getVideoCommentsByVideoId: (videoId) => {
        return api.createReguest(METHOD.GET,"/commentThreads",{part: "id,replies,snippet", videoId: videoId,order:"relevance",textFormat: "plainText"}).then(api.checkResponse)
    },

    channel: (channelId) => {
        return api.createReguest(METHOD.GET,"/channels",{part: "snippet,statistics,contentDetails,topicDetails,brandingSettings", id: channelId}).then(api.checkResponse)
    },

    getChannelVideo:(channelId) => {
        return api.createReguest(METHOD.GET,"/search",{part: "id",channelId: channelId,order: "date"}).then(api.checkResponse)
    },

    getVideosInformationByIdList: (idList) => {
        return api.createReguest(METHOD.GET,"/videos",{id: idList.join(","), part: "snippet,statistics,id"}).then(api.checkResponse)
    },

}






