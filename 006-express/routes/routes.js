const express = require("express");
const { v4: uuid } = require("uuid");
const router = express.Router();
const upload = require("./upload");

class Book {
  constructor(
    id = uuid(),
    title = "Над пропастью во Ржи",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique diam vel vestibulum consequat. Proin cursus nunc a erat egestas, vel aliquet tortor semper. Nullam magna mi, condimentum non ex ac, maximus pellentesque nulla. Nam sed euismod magna, blandit imperdiet erat. Nunc tincidunt feugiat odio viverra tempor. Etiam a pretium magna. Nulla quis nunc eu mauris tincidunt pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut vitae orci eu tortor tincidunt fermentum quis eu mauris. Praesent congue ipsum quis bibendum laoreet. Sed vel egestas velit. Etiam pellentesque risus ultrices, bibendum mi sit amet, ultrices nisl.",
    authors = "Джером Дэвид Сэлинджер",
    favorite = true,
    fileCover = "",
    fileName = "Selindger_book.pdf"
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.authors = authors;
    this.favorite = favorite;
    this.fileCover = fileCover;
    this.fileName = fileName;
  }
}

const books = {
  book: [new Book()],
};

// POST **Авторизация**
router.post("/api/user/login", (req, res) => {
  const user = { id: 1, mail: "test@mail.ru" };
  res.status(201).json(user);
});

// **Создать книгу**
router.post("/api/books", (req, res) => {
  const { book } = books;
  const { id, title, description, authors, favorite, fileCover, fileName } =
    req.body;

  const newBook = new Book(
    id,
    title,
    description,
    authors,
    favorite,
    fileCover,
    fileName
  );
  book.push(newBook);

  res.status(201);
  res.json(newBook);
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
    res.json(todo[idx]);
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
