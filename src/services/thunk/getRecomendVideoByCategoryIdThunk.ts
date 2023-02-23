import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api/api";


export const getRecomendVideoByCategoryIdThunk = createAsyncThunk(
    "getRecomendVideoByCategoryIdThunk",
    (categoryId:string,{rejectWithValue}) =>
        api.getReccomendVideosByCategoryId(categoryId)
            .then(data => data.items)
            .catch(err => rejectWithValue(String(err)))
)