import {createSlice} from '@reduxjs/toolkit';

export const envSlice = createSlice({
    name: 'env',
    initialState: {
        isClient: false,
    },
    reducers: {
        setEnv: (state, action) => {
            state.isClient = action.payload;
        },
    },
});

export const selectIsClient = (state) => state.env.isClient;

export const {setEnv} = envSlice.actions;

export default envSlice.reducer;
