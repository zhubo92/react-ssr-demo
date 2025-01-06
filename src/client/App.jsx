import React from 'react';
import "../assets/global.css";
import RouteApp from "@/router/RouteApp";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <RouteApp/>
        </BrowserRouter>
    )
}

export default App;
