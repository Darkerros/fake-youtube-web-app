import {RootState} from "../store";
import {createSelector} from "@reduxjs/toolkit";


export const baseMenuReducerSelector = (state:RootState) => state.menuState
export const baseMenuStateSelector = (state:RootState) => state.menuState.state

export const superMenuReducerSelector = createSelector(baseMenuReducerSelector,(state) => state)
export const superMenuStateSelector = createSelector(baseMenuStateSelector,(state) => state)
