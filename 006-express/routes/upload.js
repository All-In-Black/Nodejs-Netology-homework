const express = require("express");
const router = express.Router();
const uploadMulter = require("../middleware/file");
const fs = require("fs");

router.post("/upload-pdf", uploadMulter.single("book-pdf"), (req, res) => {
  if (req.file) {
    const { bookId } = req.body;
    const sourcePath = req.file.path;
    const destinationPath = `public/books/${bookId}/${req.file.originalname}`;
    fs.renameSync(sourcePath, destinationPath);
    res.json({ message: "Файл успешно загружен" });
  } else {
    res.status(400).json({ error: "Файл не был загружен" });
  }
});

module.exports = router;
