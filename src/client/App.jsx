import React from 'react';
import "../assets/global.css";
import RouterApp from "@/router/RouterApp";
import {BrowserRouter} from "react-router-dom";
import makeStore from "@/store";
import {Provider} from "react-redux";

const store = makeStore();

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
