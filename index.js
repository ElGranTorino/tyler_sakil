import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import colors from "colors";
import moment from "moment";
import path from "path"

import GeneralRoutes from "./routes/GeneralRoutes.js"

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.set("view engine", "pug");
app.set("views", path.resolve(__dirname, "static/views"));

app.use("/css", express.static(path.join(__dirname, ('/static/assets/css'))))
app.use("/js", express.static(path.join(__dirname, ('/static/assets/js'))))
app.use("/img", express.static(path.join(__dirname, ('/static/assets/img'))))


app.use(GeneralRoutes)

app.listen(PORT, () => {
    console.log(colors.white(`\n\n[${moment().format()}]    App is now running on port ${PORT}`));
})