import express from "express";
import render from "@/server/render";

const app = express();

app.use(express.static("public"));

app.use("*", render);

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`server start on port ${port}`);
});
