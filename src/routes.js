const express = require("express");
const Book = require("./models/Books");
const routes = express();

routes.get("/", (req, res) => {
  res.send("Hello World!");
});

routes.post("/", (req, res) => {
  res.send("Hello, " + req.query.name);
});

routes.get("/books", (req, res) => {
  Book.find()
    .then((books) => {
      console.log(books);
      res.status(200).json(books);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

routes.get("/books/:id", (req, res) => {
  Book.find({ id: req.params.id })
    .then((book) => res.status(200).json(book))
    .catch((err) => res.status(500).json(err));
});

routes.post("/books", (req, res) => {
  const { id, title, author, publshedAt } = req.body;
  const newBook = new Book({
    id: id,
    title: title,
    author: author,
    publshedAt: publshedAt,
  });

  newBook
    .save()
    .then((book) => {
      console.log("Usuário criado com sucesso:", book);
      return res.status(201).json(book);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json(err);
    });
});

module.exports = routes;
