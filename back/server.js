const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

var errorHandler = require("errorhandler");

const createAnnonceImmoRoutes = require("./routes/index.js");

const app = express();

app.use(cors());
app.use(errorHandler({ dumpExceptions: true, showStack: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/immo");

createAnnonceImmoRoutes(app);

app.listen(3000, () => {
  console.log("server started");
});
