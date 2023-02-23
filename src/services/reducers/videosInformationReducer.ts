import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {VideoResourceType} from "../../utils/types/api/resources/VideoResourceType";
import {getChannelVideosInfoByIdListThunk} from "../thunk/getChannelVideosInfoByIdListThunk";

interface IVideoInformation {
    items: VideoResourceType[]
    isLoading: boolean,
    isFail: boolean,
    isSuccess: boolean,
    errorMessage: string | null
}

const initialState: IVideoInformation = {
    items: [],
    isLoading: false,
    isFail: false,
    isSuccess: false,
    errorMessage: null
}

const videosInformationSlice = createSlice({
    name: "videosInformationSlice",
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


export const videosInformationReducer = videosInformationSlice.reducer
export const videosInformationActions = videosInformationSlice.actions
