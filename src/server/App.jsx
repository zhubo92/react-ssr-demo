import React from 'react';
import {StaticRouter} from "react-router-dom";
import RouterApp from "@/router/RouterApp";

function App({location, context}) {
    return (
        <StaticRouter location={location} context={context}>
            <RouterApp/>
        </StaticRouter>
    )
}

export default App;
