var express = require("express");
var path = require("path");
var compression = require("compression");

var app = express();

app.use(compression());
app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  res.setHeader("Cross-Origin-Resource-Policy", "same-origin");
  next();
});

app.use(express.static(path.join(__dirname, "docs")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "docs", "index.html"));
});

app.listen(3000);
