import React from 'react';
import "../assets/global.css";
import RouterApp from "@/router/RouterApp";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <RouterApp/>
        </BrowserRouter>
    )
}

export default App;
