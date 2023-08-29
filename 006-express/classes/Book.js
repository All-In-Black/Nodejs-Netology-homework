const { v4: uuid } = require("uuid");

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

module.exports = Book;
