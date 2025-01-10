import React from 'react';
import {StaticRouter} from "react-router-dom";
import RouterApp from "@/router/RouterApp";
import {Provider} from "react-redux";

function App({location, context, store}) {
    return (
        <Provider store={store}>
            <StaticRouter location={location} context={context}>
                <RouterApp/>
            </StaticRouter>
        </Provider>
    )
}

export default App;
