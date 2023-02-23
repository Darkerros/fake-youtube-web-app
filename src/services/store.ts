import {combineReducers, configureStore} from "@reduxjs/toolkit";
import feedReducer from "./reducers/feedReducer";
import {channelReducer} from "./reducers/channelReducer";
import {videoInfoReducer} from "./reducers/videoInfoReducer";
import {videoRecomendReducer} from "./reducers/videoRecomendReducer";
import {menuReducer} from "./reducers/muneReducer";
import {channelVideoReducer} from "./reducers/channelVideoReducer";
import {searchChannelVideoReducer} from "./reducers/searchChannelVideoReducer";


const rootReducer = combineReducers({
    feed: feedReducer,
    channel: channelReducer,
    video: videoInfoReducer,
    recomendVideos: videoRecomendReducer,
    menuState: menuReducer,
    searchChannelVideos: searchChannelVideoReducer,
    channelVideos: channelVideoReducer
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch