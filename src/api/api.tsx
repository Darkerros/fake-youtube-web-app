import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {SearchResponseType, VideosResponseType} from "./types/types";

enum METHOD {
    GET,
    POST,
    DELETE
}
const API_BASE_URL = "https://www.googleapis.com/youtube/v3"
const API_CLIENT_TOKEN = "AIzaSyBu9UrH2chr_PHOzf4U6A-oiaI6ZUz82PY"
// const API_OAUTH_TOKEN = ""
// const API_SECRET_TOKEN = ""


interface IApi {
    createReguest: (method: METHOD,endpoint: string, params ?: any ) => Promise<AxiosResponse>

    checkResponse: (resp: AxiosResponse) => Promise<any>

    search: () => Promise<SearchResponseType>
    videos: () => Promise<VideosResponseType>
}

export const api: IApi = {

    createReguest: (method, endpoint,params) => {

        const config: AxiosRequestConfig = {
            headers: {

            },
            params: {key: API_CLIENT_TOKEN,maxResults: 50,...params}
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
        return api.createReguest(METHOD.GET,"/search").then(api.checkResponse)
    },

    videos: () => {
        return api.createReguest(METHOD.GET,"/videos",{chart:"mostPopular",part: "snippet,statistics,id"}).then(api.checkResponse)
    }

}






