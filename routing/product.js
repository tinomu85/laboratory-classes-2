const express = require("express");
const path = require("path");
const fs = require("fs");
const { STATUS_CODE } = require("../constants/statusCode");

const renderNewProductPage = require("../views/renderNewProductPage");
const router = express.Router();

router.get("/add", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "add-product.html"));
});

router.post("/add", (req, res) => {
  const { name, description } = req.body;

  fs.writeFile(
    "product.txt",
    `Name: ${name}, Description: ${description}`,
    (err) => {
      if (err) {
        console.error("Error saving product:", err);
        return res
          .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
          .send("Error saving product");
      }
      res.status(STATUS_CODE.FOUND).redirect("/product/new");
    }
  );
});

router.get("/new", (req, res) => {
  fs.readFile("product.txt", "utf-8", (err, data) => {
    if (err) {
      return res.send(renderNewProductPage(null));
    }
    res.send(renderNewProductPage(data));
  });
});

module.exports = router;
