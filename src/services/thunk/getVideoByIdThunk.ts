import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api/api";
import {AxiosError} from "axios";


export const getVideoByIdThunk = createAsyncThunk(
    "getVideoByIdThunk",
    (videoId:string,{rejectWithValue}) => api.getVideoById(videoId).then(data => data.items[0]).catch((err:AxiosError) => rejectWithValue(String(err)))
)