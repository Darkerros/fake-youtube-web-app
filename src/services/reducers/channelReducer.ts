import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getChannelInfoThunk} from "../thunk/getChannelInfoThunk";
import {ChannelResourceType} from "../../utils/types/api/resources/ChannelResourceType";
import {ChannelResponseType} from "../../utils/types/api/responses/ChannelResponseType";

interface IChannelState {
    isLoading: boolean,
    isError: boolean,
    errorMessage: string | null,
    isSucess: boolean,
    data: ChannelResourceType | null
}

const initialState:IChannelState = {
    isError: false,
    isLoading: false,
    isSucess: false,
    errorMessage: null,
    data: null
}



const channelSlice = createSlice({
    name: "channelReducer",
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getChannelInfoThunk.pending,(state) => {
                state.errorMessage = null
                state.isError = false
                state.isLoading = true
                state.isSucess = false
                state.data = null
            })
            .addCase(getChannelInfoThunk.fulfilled,(state,action:PayloadAction<ChannelResponseType>) => {
                state.isLoading = false
                state.isSucess = true
                state.data = action.payload.items[0]
            })
            .addCase(getChannelInfoThunk.rejected,(state,action) => {
                state.isLoading = false
                state.isError = true
                state.errorMessage = action.payload as string
            })
    }
})


export const channelActions = channelSlice.actions
export const channelReducer = channelSlice.reducer