import React, {useEffect} from 'react';
import Header from "@/components/Header";
import routerConfig from "./routerConfig";
import {useRoutes} from "react-router-dom";
import {useDispatch} from "react-redux";
import {ENV_TYPE, setEnv} from "@/store/slices/envSlice";

function RouterApp() {
    const routes = useRoutes(routerConfig);
    const dispatch = useDispatch();
    const isClient = typeof window !== "undefined";

    useEffect(() => {
        dispatch(setEnv(isClient));
    });

    return (
        <div>
            <Header />
            {routes}
        </div>
    );
}

export default RouterApp;
