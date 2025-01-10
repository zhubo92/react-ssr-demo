import getLink from "@/server/getLink";
import getScript from "@/server/getScript";

export default function getHTML(componentHTML, path, store) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>SSR</title>
    
    ${getLink()}
</head>
<body>
    <div id="root">${componentHTML}</div>
    <script>
        window.storeState = ${JSON.stringify(store.getState())};
        window.requestPath = "${path}";
    </script>
    ${getScript()}
</body>
</html>`;
}
