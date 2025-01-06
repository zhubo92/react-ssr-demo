import React from 'react';
import {StaticRouter} from "react-router-dom";
import RouteApp from "@/router/RouteApp";

function App({location, context}) {
    return (
        <StaticRouter location={location} context={context}>
            <RouteApp/>
        </StaticRouter>
    )
}

export default App;
