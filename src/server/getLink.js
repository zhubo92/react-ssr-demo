import fs from "fs";

export default function getLink() {
    return fs.readdirSync("public/css")
        .filter(file => file.endsWith(".css"))
        .map(file => `<link href="./css/${file}" rel="stylesheet" />`)
        .join("\n");
}
