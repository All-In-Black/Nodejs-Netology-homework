const express = require("express");
const router = express.Router();
const uploadMulter = require("../middleware/file");
const books = require("../classes/main");

// POST **Авторизация**
router.post("/api/user/login", (req, res) => {
  const user = { id: 1, mail: "test@mail.ru" };
  res.status(201).json(user);
});

// **Создать книгу**
router.post("/api/books", uploadMulter.single("book-pdf"), (req, res) => {
  if (req.file) {
    const { book } = books;
    const { id, title, description, authors, favorite, fileCover } = req.body;
    const fileName = req.file.filename;
    const fileBook = req.file.path;

    const newBook = new Book(
      id,
      title,
      description,
      authors,
      favorite,
      fileCover,
      fileName,
      fileBook
    );
    book.push(newBook);

    res.status(201);
    res.json(newBook);
  }
  res.json();
});

// GET
router.get("/api/books", (req, res) => {
  const { book } = books;
  res.json(book);
});

router.get("/api/books/:id", (req, res) => {
  const { book } = books;
  const { id } = req.params;
  const idx = book.findIndex((el) => el.id === id);

  if (idx !== -1) {
    res.json(book[idx]);
  } else {
    res.status(404);
    res.send("404 | Страница не найдена");
  }
});

router.put("/api/books/:id", (req, res) => {
  const { book } = books;
  const { title, description, authors, favorite, fileCover, fileName } =
    req.body;
  const { id } = req.params;
  const idx = book.findIndex((el) => el.id === id);

  if (idx !== -1) {
    book[idx] = {
      ...book[idx],
      title,
      description,
      authors,
      favorite,
      fileCover,
      fileName,
    };
    res.json(book[idx]);
  } else {
    res.status(404);
    res.json("404 | страница не найдена");
  }
});

router.delete("/api/books/:id", (req, res) => {
  const { book } = books;
  const { id } = req.params;
  const idx = book.findIndex((el) => el.id === id);

  if (idx !== -1) {
    book.splice(idx, 1);
    res.json(true);
  } else {
    res.status(404);
    res.json("404 | страница не найдена");
  }
});

module.exports = router;
