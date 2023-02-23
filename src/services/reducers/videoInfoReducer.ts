import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getVideoByIdThunk} from "../thunk/getVideoByIdThunk";
import {VideoResourceType} from "../../utils/types/api/resources/VideoResourceType";

interface IVideoInfoState {
    isSuccess: boolean
    isLoading: boolean,
    isError: boolean,
    errorMessage: null | string
    data: VideoResourceType | null
}

const initialState:IVideoInfoState = {
    isSuccess: false,
    isLoading: false,
    isError: false,
    errorMessage: null,
    data: null
}



const videoInfoSlice = createSlice({
    name: "videoInfoSlice",
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getVideoByIdThunk.pending,(state) => {
                state.isError = false
                state.errorMessage = null
                state.isSuccess = false
                state.isLoading = true
                state.data = null
            })
            .addCase(getVideoByIdThunk.fulfilled,(state,action:PayloadAction<VideoResourceType>) => {
                state.isLoading = false
                state.isSuccess = true
                state.data = action.payload
            })
            .addCase(getVideoByIdThunk.rejected,(state,action) => {
                state.isError = true
                state.errorMessage = action.payload as string
            })
    }
})


export const videoInfoReducer = videoInfoSlice.reducer
export const videoInfoActions = videoInfoSlice.actions