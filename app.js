var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var cookieSession = require("cookie-session");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var quizRouter = require("./routes/quiz");
const articleRouter = require("./routes/article");
var educationRouter = require("./routes/education");
var timelineRouter = require("./routes/timeline");
var aboutUsRouter = require("./routes/aboutUs");
var searchRouter = require("./routes/search");


var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
1;
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.use(
  cookieSession({
    name: "session",
    keys: ["key1"],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  })
);

app.use("/", indexRouter);
app.use("/quiz", quizRouter);
app.use("/article", articleRouter);
app.use("/education", educationRouter);
app.use("/timeline", timelineRouter);
app.use("/aboutUs", aboutUsRouter);
app.use("/search", searchRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// new Lunr index

var documents = 



module.exports = app;
