//ESM寫法
// import express from "express";
// import {resolve} from "path";
// const __dirname = import.meta.dirname;

//common JS寫法
const express = require("express");
const path = require("path")

const app = express();
app.use(express.static(path.resolve(__dirname, "public")))
app.use("/bootstrap", express.static(path.resolve(__dirname, "node_modules/bootstrap/dist")))
app.use('/jquery', express.static(path.resolve(__dirname, 'node_modules/jquery/dist')));
app.use('/fontawesome', express.static(path.resolve(__dirname, 'node_modules/@fortawesome/fontawesome-free')));




app.listen(3000,() => {
    console.log("伺服器已啟動於 http://localhost:3000");
})
