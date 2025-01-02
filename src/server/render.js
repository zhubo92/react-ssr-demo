import ReactDOM from "react-dom/server";
import React from "react";
import App from "@/server/App";
import getScript from "@/server/getScript";

export default function render(req, res)  {
    const componentHTML = ReactDOM.renderToString(<App/>);
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>SSR</title>
</head>
<body>
    <div id="root">${componentHTML}</div>
    ${getScript()}
</body>
</html>`;
    res.send(html);
}
