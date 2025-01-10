import ReactDOM from "react-dom/server";
import React from "react";
import App from "@/server/App";
import getHTML from "@/server/getHTML";
import loadData from "@/server/loadData";
import makeStore from "@/store";

export default async function render(req, res)  {
    const store = makeStore();

    await loadData(req.originalUrl, store);

    const context = {};
    const componentHTML = ReactDOM.renderToString(<App location={req.originalUrl} context={context} store={store} />);
    const html = getHTML(componentHTML, req.originalUrl, store);

    res.send(html);
}
