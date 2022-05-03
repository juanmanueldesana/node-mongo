const express = require("express");
const router = express.Router();
const fs = require("fs");

const PATH_ROUTES = __dirname // __dirname is a global variable that holds the path to the current directory

const removeExtension = (file) => {
  return file.split(".").shift();
};

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension(file);
  if (name !== "index") {
    router.use(`/${name}`, require(`./${name}`));
  }
});

module.exports = router;
