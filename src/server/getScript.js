import fs from "fs";

export default function getScript() {
    return fs.readdirSync("public/js")
        .filter(file => file.endsWith(".js"))
        .map(file => `<script src="/js/${file}"></script>`)
        .join("\n");
}
