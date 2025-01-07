import {createSlice} from '@reduxjs/toolkit';

export const ENV_TYPE = {
    SERVER: 'server',
    CLIENT: 'client'
}

export const envSlice = createSlice({
    name: 'env',
    initialState: {
        type: ENV_TYPE.SERVER,
    },
    reducers: {
        setEnv: (state, action) => {
            state.type = action.payload;
        },
    },
});

// 为每个 case reducer 函数生成 Action creators
export const {setEnv} = envSlice.actions;

export default envSlice.reducer;
