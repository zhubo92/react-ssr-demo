import React from 'react';
import "../assets/global.css";
import RouterApp from "@/router/RouterApp";
import {BrowserRouter} from "react-router-dom";
import store from "@/store";
import {Provider} from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <RouterApp />
            </BrowserRouter>
        </Provider>
    )
}

export default App;
