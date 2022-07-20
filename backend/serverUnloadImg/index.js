const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const port = 3002;
const url = `http://localhost:${port}`;

const app = express();
const upload = multer({
  dest: path.resolve("./", "static"),
});
app.use(cors());
app.use(express.static('static'));

app.post("/", upload.single("file"), (req, res) => {
  return res.send(req.file.filename);
});

app.listen(port, () => console.log(`Server started on ${url}`));
