const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const rotas = require("./rotas.js" );


app.use(bodyParser.json());

app.use("/partidas", rotas);

app.listen(8000);

module.exports = app