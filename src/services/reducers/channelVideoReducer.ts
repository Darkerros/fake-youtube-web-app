import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {VideoResourceType} from "../../utils/types/api/resources/VideoResourceType";
import {getChannelVideosInfoByIdListThunk} from "../thunk/getChannelVideosInfoByIdListThunk";

interface IChannelVideo {
    items: VideoResourceType[]
    isLoading: boolean,
    isFail: boolean,
    isSuccess: boolean,
    errorMessage: string | null
}

const initialState: IChannelVideo = {
    items: [],
    isLoading: false,
    isFail: false,
    isSuccess: false,
    errorMessage: null
}

const channelVideoSlice = createSlice({
    name: "channelVideoSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getChannelVideosInfoByIdListThunk.pending,(state) => {
                state.isLoading = true
                state.isFail = false
                state.isSuccess = false
                state.errorMessage = null
            })
            .addCase(getChannelVideosInfoByIdListThunk.fulfilled,(state,action:PayloadAction<VideoResourceType[]>) => {
                state.isLoading = false
                state.isSuccess = true
                state.items = action.payload
            })
            .addCase(getChannelVideosInfoByIdListThunk.rejected,(state,action) => {
                state.isLoading = false
                state.isFail = true
                state.isSuccess = false
                state.errorMessage = action.payload as string || null
            })
    }
})


export const channelVideoReducer = channelVideoSlice.reducer
export const channelVideoActions = channelVideoSlice.actions
