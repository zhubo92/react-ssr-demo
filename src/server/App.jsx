import React from 'react';
import {StaticRouter} from "react-router-dom";
import RouterApp from "@/router/RouterApp";
import {Provider} from "react-redux";
import store from "@/store";

function App({location, context}) {
    return (
        <Provider store={store}>
            <StaticRouter location={location} context={context}>
                <RouterApp/>
            </StaticRouter>
        </Provider>
    )
}

export default App;
