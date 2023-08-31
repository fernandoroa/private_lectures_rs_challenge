const express = require("express");

const nunjucks = require("nunjucks");

const routes = require("./routes");

const methodOverride = require("method-override");

const server = express();

server.use(express.urlencoded({ extended: true }));

server.use(express.static("public"));

server.use(methodOverride("_method"));

server.use(routes);

server.set("view engine", "njk");

var env = new nunjucks.Environment(new nunjucks.FileSystemLoader("src/app/views"), {
  autoescape: false,
  noCache: true,
});

env.express(server);

server.listen(5040, function () {
  console.log("server ready");
});
