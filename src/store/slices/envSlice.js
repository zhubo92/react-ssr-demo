import {createSlice} from '@reduxjs/toolkit';
import {env} from "@/store/initialState";

export const envSlice = createSlice({
    name: 'env',
    initialState: env,
    reducers: {
        setEnv: (state, action) => {
            state.isClient = action.payload;
        },
    },
});

export const selectIsClient = (state) => state.env.isClient;

export const {setEnv} = envSlice.actions;

export default envSlice.reducer;
