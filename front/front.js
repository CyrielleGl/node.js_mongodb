const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", (req, res, next) => {
  res.render("home");
});

app.get('/annonces', (req, res) => {
  fetch("http://localhost:3000/annonces", {
    headers: { "Content-Type": "application/json" },
  })
    .then((data) => {
      return data.json();
    })
    .then((json) => {
      res.render("annonces", {annonces: json});
    })
    .catch((err) => console.log(err));
});

app.get('/annonce/:id', (req, res) => {
  fetch(`http://localhost:3000/annonce/${req.params.id}`)
    .then((data) => {
      return data.json();
    })
    .then((json) => {
      res.render("annonce", {annonce: json});
    })
    .catch((err) => console.log(err));
});

app.get('/create', (req, res) => {
  res.render('addAnnonce');
});

app.get('/update/annonce/:id', (req, res) => {
  fetch(`http://localhost:3000/annonce/${req.params.id}`)
  .then((data) => data.json())
  .then((json) => {
    res.render('updateAnnonce', {annonce: json});
  })
});

app.listen(4000, "localhost", () => {
  console.log("front-end is running");
});
