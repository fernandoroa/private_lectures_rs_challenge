const express = require("express");

const nunjucks = require("nunjucks");

const routes = require("./routes");

const server = express();

server.use(express.static("public"));

server.use(routes);

server.set("view engine", "njk");

var env = new nunjucks.Environment(new nunjucks.FileSystemLoader("views"), {
  autoescape: false,
  noCache: true,
});

env.express(server);

server.listen(5040, function () {
  console.log("server ready");
});
