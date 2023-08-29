

const express = require("express");
const app = express();
const routes = require("./routes/routes");
const uploadRouter = require("./routes/upload");
const downloadRouter = require("./routes/download");
const err404 = require("./middleware/err-404");
const logger = require("./middleware/logger");

app.use(express.json());
app.use(routes);
app.use("/upload", uploadRouter);
app.use("/download", downloadRouter);
app.use("/public", express.static(__dirname + "/public"));
app.use(err404);
app.use(logger);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
