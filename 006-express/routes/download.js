const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/download/:bookId/:filename", (req, res) => {
  const { bookId, filename } = req.params;
  const filePath = path.join(
    __dirname,
    `../public/books/${bookId}/${filename}`
  );

  // Проверяем существование файла
  if (fs.existsSync(filePath)) {
    res.download(filePath);
  } else {
    res.status(404).json({ error: "Файл не найден" });
  }
});

module.exports = router;
