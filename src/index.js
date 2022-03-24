const express = require("express");
const morgan = require("morgan");
const path = require("path");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const session = require("express-session");
const passport = require("passport");
const MySQLStore = require("express-mysql-session")(session);
const bodyParser = require("body-parser");

//Inicializations
const app = express();
require("./database");

//Settings
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, 'views'));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: '.hbs',
    helpers: require("./lib/handlebars"),
  })
);
app.set("view engine", ".hbs");

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "mysecretapp",
    resave: true,
    saveUninitialized: true,
  })
);

//?
app.use(express.json());

//Global variables
app.use((req, res, next) => {
  next();
});

//Routes
app.use(require("./routes/index"));
app.use(require("./routes/authentication"));
app.use(require("./routes/preCheck"));
//app.use("/links", require("./routes/links"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

//Start server
app.listen(app.get("port"), () => {
  console.log("server on port: ", app.get("port"));
});
