const express = require("express");
const multer = require("multer");
const cors = require("cors");
const lib_path = require("path");

const app = express();
const upload = multer({
  dest: lib_path.resolve("./", "static"),
});

app.use(cors());
app.use(express.static('static'));

app.post("/", upload.single("file"), (req, res) => {
  return res.send(req.file.filename);
});

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})