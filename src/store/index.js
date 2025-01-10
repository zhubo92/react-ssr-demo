import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import envReducer from "./slices/envSlice";
import moviesReducer from "./slices/moviesSlice";

function makeStore() {
    return configureStore({
        reducer: {
            counter: counterReducer,
            env: envReducer,
            movies: moviesReducer,
        },
    });
}


export default makeStore;
