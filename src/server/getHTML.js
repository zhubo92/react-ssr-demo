import getLink from "@/server/getLink";
import getScript from "@/server/getScript";

export default function getHTML(componentHTML) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>SSR</title>
    
    ${getLink()}
</head>
<body>
    <div id="root">${componentHTML}</div>
    ${getScript()}
</body>
</html>`;
}
