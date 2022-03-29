const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const { authentication } = require("./middlewares/oauth/authentication");

const app = express();
require("./database");
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "/public"));
app.use(authentication);

app.engine("html", require("ejs").renderFile);

app.set("view engine", "html");

app.use("/api", require("./routes"));
app.use("/api/index", require("./routes/index"));
app.use("/api/users", require("./routes/users.routes"));
app.use("/api/vehicles", require("./routes/vehicles.routes"));
app.use("/api/sections", require("./routes/sections.routes"));
app.use("/api/questions", require("./routes/questions.routes"));
app.use("/", require("./routes/users.routes"));

module.exports = app;
