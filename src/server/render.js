import ReactDOM from "react-dom/server";
import React from "react";
import App from "@/server/App";
import getHTML from "@/server/getHTML";

export default function render(req, res)  {
    const context = {};
    const componentHTML = ReactDOM.renderToString(<App location={req.originalUrl} context={context} />);
    const html = getHTML(componentHTML);

    res.send(html);
}
