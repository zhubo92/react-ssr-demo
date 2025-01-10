import express from "express";
import render from "@/server/render";
import {createProxyMiddleware} from "http-proxy-middleware";

const app = express();

app.use(express.static("public"));

app.use("/api", createProxyMiddleware({
    target: "http://localhost:3000/api",
    changeOrigin: true,
}));

app.use("*", render);

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`server start on port ${port}`);
});
