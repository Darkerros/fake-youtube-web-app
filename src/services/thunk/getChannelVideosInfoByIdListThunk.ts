import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api/api";


export const getChannelVideosInfoByIdListThunk = createAsyncThunk(
    "getVideosInformationByIdList",
    ({videoIdList}:{videoIdList: string[]},{rejectWithValue}) => api.getVideosInformationByIdList(videoIdList).then(data => data.items).catch(err => rejectWithValue(err.toString()))
)