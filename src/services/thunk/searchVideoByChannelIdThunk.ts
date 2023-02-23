import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api/api";

export const searchVideoByChannelIdThunk = createAsyncThunk(
    "searchVideoByChannelIdThunk",
(channelId:string,{rejectWithValue}) => api.getChannelVideo(channelId).then(data => data.items).catch(err => rejectWithValue(err.toString()))
)