import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api/api";
import {ChannelRequestParamsType} from "../../utils/types/api/params/ChannelRequestParamsType";

export const getChannelInfoThunk = createAsyncThunk(
    "getChannelInfoThunk",
    (channelId:ChannelRequestParamsType["id"],{rejectWithValue}) => api.channel(channelId).catch((err: any) => rejectWithValue(err.message.toString()))
)