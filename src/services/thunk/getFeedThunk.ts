import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api/api";
import {VideoReguestParamsType} from "../../utils/types/api/params/VideoReguestParamsType";

export const getFeedThunk = createAsyncThunk(
    "getFeedThunk",
    (params: VideoReguestParamsType,{rejectWithValue}) => api.videos(params).then(data => data.items).catch(err => rejectWithValue(err.toString()))
)

