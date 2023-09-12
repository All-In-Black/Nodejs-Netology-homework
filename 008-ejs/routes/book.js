const express = require("express");
const router = express.Router();
const { v4: uuid } = require("uuid");

class Book {
  constructor(
    id = uuid(),
    title = "",
    description = "",
    authors = "",
    favorite = true,
    fileCover = "",
    fileName = ""
  ) {
    this.id = id || "";
    this.title = title || "";
    this.description = description || "";
    this.authors = authors || "";
    this.favorite = favorite || "";
    this.fileCover = fileCover || "";
    this.fileName = fileName || "";
  }
}

const stor = {
  book: [],
};

[1, 2, 3, 4, 5, 6].map((el) => {
  const newBook = new Book(
    `book ${el}`,
    `Title: ${el}`,
    `description: lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique diam vel vestibulum consequat. Proin cursus nunc a erat egestas, vel aliquet tortor semper. Nullam magna mi, condimentum non ex ac, maximus ${el}`,
    `author ${el}`,
    ``,
    ``,
    `${el}.pdf`
  );
  stor.book.push(newBook);
});

//GET
router.get("/", (req, res) => {
  const { book } = stor;
  res.render("book/index", {
    title: "Список книг",
    books: book,
  });
});

router.get("/create", (req, res) => {
  res.render("book/create", {
    title: "BOOK | create",
    book: {},
  });
});

//POST
router.post("/create", (req, res) => {
  const { book } = stor;
  const {id} = req.params;
  const { title, description, authors, favorite, fileCover, fileName } =
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

  res.redirect("/book");
});

router.get("/:id", (req, res) => {
  const { book } = stor;
  const { id } = req.params;
  const idx = book.findIndex((el) => el.id === id);

  if (idx === -1) {
    res.redirect("/404");
  }

  res.render("book/view", {
    title: "BOOK | view",
    book: book[idx],
  });
});

router.get("/update/:id", (req, res) => {
  const { book } = stor;
  const { id } = req.params;
  const idx = book.findIndex((el) => el.id === id);

  if (idx === -1) {
    res.redirect("/404");
  }

  res.render("book/update", {
    title: "BOOK | view",
    book: book[idx],
  });
});


router.post("/update/:id", (req, res) => {
  const { book } = stor;
  const { id } = req.params;
  const { title, description, authors, favorite, fileCover, fileName } =
    req.body;
  const idx = book.findIndex((el) => el.id === id);

  if (idx === -1) {
    res.redirect("/404");
  }

  book[idx] = {
    ...book[idx],
    title,
    description,
    authors,
    favorite,
    fileCover,
    fileName,
  };
  res.redirect(`/book`);
});

router.post("/delete/:id", (req, res) => {
  const { book } = stor;
  const { id } = req.params;
  const idx = book.findIndex((el) => el.id === id);

  if (idx === -1) {
    res.redirect("/404");
  }

  book.splice(idx, 1);
  res.redirect(`/book`);
});


module.exports = router;
