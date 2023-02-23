import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SearchVideoResourceType} from "../../utils/types/api/resources/SearchVideoResourceType";
import {searchVideoByChannelIdThunk} from "../thunk/searchVideoByChannelIdThunk";

interface IChannelSearchVideo {
    items: SearchVideoResourceType[]
    isLoading: boolean,
    isFail: boolean,
    isSuccess: boolean,
    errorMessage: null | string
}

const initialState: IChannelSearchVideo = {
    items: [],
    isLoading: false,
    isFail: false,
    isSuccess: false,
    errorMessage: null
}

const searchChannelVideoSlice = createSlice({
    name: "channelVideoSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchVideoByChannelIdThunk.pending, (state) => {
                state.isSuccess = false
                state.isLoading = true
                state.isFail = false
                state.errorMessage = null
            })
            .addCase(searchVideoByChannelIdThunk.fulfilled, (state,action:PayloadAction<SearchVideoResourceType[]>) => {
                state.isSuccess = true
                state.isLoading = false
                state.items = action.payload
            })
            .addCase(searchVideoByChannelIdThunk.rejected, (state,action) => {
                state.isSuccess = false
                state.isLoading = false
                state.isFail = true
                state.errorMessage = action.payload as string || null
            })
    }
})


export const searchChannelVideoReducer = searchChannelVideoSlice.reducer
export const searchChannelVideoActions = searchChannelVideoSlice.actions