import {createSlice} from "@reduxjs/toolkit";

interface IMenuState {
    state: boolean
}

const initialState:IMenuState = {
    state: false
}


const menuSlice = createSlice({
    name: "menuSlice",
    initialState: initialState,
    reducers: {
        openMenu(state:IMenuState) {
            state.state = true
        },
        closeMenu(state:IMenuState) {
            state.state = false
        },
        togleMenu(state:IMenuState) {
            state.state = !state.state
        }
    }
})

export const menuReducer = menuSlice.reducer
export const menuActions = menuSlice.actions