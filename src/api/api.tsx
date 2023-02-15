import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {ChannelResponseType, SearchResponseType, VideosResponseType} from "./types/types";

enum METHOD {
    GET,
    POST,
    DELETE
}
const API_BASE_URL = "https://www.googleapis.com/youtube/v3"
const API_CLIENT_TOKEN = "AIzaSyDaMCm6KP65A33wynsFBnIwMpdqY_wACMA"
// const API_OAUTH_TOKEN = ""
// const API_SECRET_TOKEN = ""


interface IApi {
    createReguest: (method: METHOD,endpoint: string, params ?: any ) => Promise<AxiosResponse>

    checkResponse: (resp: AxiosResponse) => Promise<any>

    search: () => Promise<SearchResponseType>
    videos: (part: ("snippet" | "statistics" | "id")[]) => Promise<VideosResponseType>
    getVideoById: (id:string) => Promise<VideosResponseType>
    channel: (channelId: string) => Promise<ChannelResponseType>
}

export const api: IApi = {

    createReguest: (method, endpoint,params) => {

        const config: AxiosRequestConfig = {
            headers: {

            },
            //params: {access_token: USER_TOKEN,maxResults: 50,regionCode: "ru",...params}
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

    search: () => {
        return api.createReguest(METHOD.GET,"/search",{part: "snippet,id"}).then(api.checkResponse)
    },

    videos: (part) => {
        return api.createReguest(METHOD.GET,"/videos",{chart:"mostPopular",part: part.join(",")}).then(api.checkResponse)
    },

    getVideoById: (id) => {
        return api.createReguest(METHOD.GET,"/videos",{id: id, part: "snippet,statistics,id"}).then(api.checkResponse)
    },

    channel: (channelId) => {
        return api.createReguest(METHOD.GET,"/channels",{part: "snippet", id: channelId}).then(api.checkResponse)
    }

}






