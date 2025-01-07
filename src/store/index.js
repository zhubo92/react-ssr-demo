import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import envReducer from "./slices/envSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        env: envReducer,
    },
});
