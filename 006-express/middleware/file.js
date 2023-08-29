const multer = require("multer");
// const upload = multer({ dest: "upload/" });

const storage = multer.diskStorage({
  destination (req, file, cb) {
    cb(null, "public/upload");
  },
  filename (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname  );
  },
});

// const upload = multer({ storage: storage });

module.exports = multer({ storage });
