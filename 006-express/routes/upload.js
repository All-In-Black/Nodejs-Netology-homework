const express = require("express");
const router = express.Router();
const uploadMulter = require("../middleware/file");

router.post('/upload-pdf',
  uploadMulter.single('book-pdf'),
  (req, res) => {
    if (req.file) {
      const {path} = req.file;
      res.json({path});
    }
    res.json();
  })

module.exports = router;
