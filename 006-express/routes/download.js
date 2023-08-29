const express = require("express");
const router = express.Router();
const books = require("../classes/main");

router.get("/api/books/:id/download", (req, res) => {
  const { book } = books;
  const { id } = req.params;
  const idx = book.findIndex((el) => el.id === id);

  if (!book) {
    res.status(404);
    return res.json("404 | book is not found");
  }

  res.download(book.fileBook);
});

module.exports = router;
