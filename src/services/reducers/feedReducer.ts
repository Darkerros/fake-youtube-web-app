import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getFeedThunk} from "../thunk/getFeedThunk";
import {VideoResourceType} from "../../utils/types/api/resources/VideoResourceType";

interface IFeedReducer {
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    errorMessage: string | null
    items: VideoResourceType[]
}

const initialState:IFeedReducer = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    errorMessage: null,
    items: []
}

const feedReducer = createSlice({
    name: "feedSlice",
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getFeedThunk.pending,(state) => {
                state.isLoading = true
                state.items = []
                state.errorMessage = null
                state.isSuccess = false
                state.isError = false
            })
            .addCase(getFeedThunk.fulfilled,(state,action: PayloadAction<VideoResourceType[]>) => {
                state.isLoading = false
                state.items = action.payload
            })
            .addCase(getFeedThunk.rejected,(state,action: PayloadAction<any>) => {
                state.isLoading = false
                state.errorMessage = action.payload
            })
    }
})
export default feedReducer.reducer
export const feedActions = feedReducer.actions
