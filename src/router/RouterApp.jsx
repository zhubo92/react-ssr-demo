import React from 'react';
import Header from "@/components/Header";
import routerConfig from "./routerConfig";
import {useRoutes} from "react-router-dom";

function RouterApp() {
    const routes = useRoutes(routerConfig);
    return (
        <div>
            <Header />
            {routes}
        </div>
    );
}

export default RouterApp;
