// const { json } = require("express");
const express = require("express");
const { v4: uuid } = require('uuid');

class Book {
    constructor(
        id = uuid(),
        title = "",
        description = "",
        authors = "",
        favorite = "",
        fileCover = "",
        fileName = ""
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
    book : [
        new Book(),
    ],
};

const app = express();
app.use(express.json());

// POST **Авторизация**
app.post('/api/user/login', (req, res) => {
    const user = { id: 1, mail: "test@mail.ru" };
    res.status(201).json(user);
});

// **Создать книгу**
app.post('/api/books', (req, res) => {
    const {book} = books;
    const {id, title, description, authors, favorite, fileCover, fileName} = req.body;

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
app.get('/api/books', (req, res) => {
    const {book} = books;
    res.json(book);
});

app.get('/api/books/:id', (req, res) => {
    const {book} = books;
    const {id} = req.params;
    const idx = book.findIndex((el) => el.id === id);

    if (idx !== -1) {
        res.json(book[idx]);
    } else {
        res.status(404);
        res.send('404 | Страница не найдена');
    }
})


app.put("/api/books/:id", (req, res) => {
    const {book} = books;
    const { title, description, authors, favorite, fileCover, fileName } = req.body;
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
            fileName
    }
        res.json(todo[idx]);
    } else {
        res.status(404);
        res.json("404 | страница не найдена");
    }
})

app.delete("/api/books/:id", (req, res) => {
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


app.listen(3000, () => {
    console.log('Server started on port 3000');
})
