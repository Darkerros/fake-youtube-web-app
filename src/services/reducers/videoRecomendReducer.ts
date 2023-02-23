import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getRecomendVideoByCategoryIdThunk} from "../thunk/getRecomendVideoByCategoryIdThunk";
import {VideoResourceType} from "../../utils/types/api/resources/VideoResourceType";

interface IVideoRecomendState {
    isSuccess: boolean
    isError: boolean
    errorMessage: null | string
    isLoading:boolean
    items: VideoResourceType[]
}

const initialState: IVideoRecomendState = {
    isSuccess: false,
    isError: false,
    errorMessage: null,
    isLoading:false,
    items: []
}


const videoRecomendslice = createSlice({
    name: "recomendVideosSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getRecomendVideoByCategoryIdThunk.pending,(state) => {
                state.items = []
                state.isError = false
                state.errorMessage = null
                state.isSuccess = false
                state.isLoading = true
            })
            .addCase(getRecomendVideoByCategoryIdThunk.fulfilled,(state,action:PayloadAction<VideoResourceType[]>) => {
                state.items = action.payload
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(getRecomendVideoByCategoryIdThunk.rejected,(state,action) => {
                state.errorMessage = action.payload as string
                state.isError = true
            })
    }
})

export const videoRecomendReducer = videoRecomendslice.reducer
export const videoRecomendReducerActions = videoRecomendslice.actions