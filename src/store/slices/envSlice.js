import {createSlice} from '@reduxjs/toolkit';

export const ENV_TYPE = {
    PRODUCTION: 'production',
    DEVELOPMENT: 'development'
}

export const envSlice = createSlice({
    name: 'env',
    initialState: {
        type: ENV_TYPE.DEVELOPMENT,
    },
    reducers: {
        setEnv: (state, action) => {
            if(!(action.payload in ENV_TYPE)) return;
            state.type = action.payload;
        },
    },
});

// 为每个 case reducer 函数生成 Action creators
export const {setEnv} = envSlice.actions;

export default envSlice.reducer;
