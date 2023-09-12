const express = require("express");

const errorMiddleware = require("./middleware/error");

const indexRouter = require("./routes/index");
const bookRouter = require("./routes/book");
const bodyParser = require("body-parser");

const app = express();
// app.use(errorMiddleware);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/book", bookRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT);
