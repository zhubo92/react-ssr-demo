import ReactDOM from "react-dom/server";
import React from "react";
import App from "@/server/App";
import getHTML from "@/server/getHTML";
import loadData from "@/server/loadData";

export default async function render(req, res)  {
    await loadData(req.originalUrl);

    const context = {};
    const componentHTML = ReactDOM.renderToString(<App location={req.originalUrl} context={context} />);
    const html = getHTML(componentHTML, req.originalUrl);

    res.send(html);
}
