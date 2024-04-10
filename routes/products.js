const {
  postProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProduct,
} = require("../controllers/productController");

const Product = require("../models/product.model.js");
const express = require("express");

const router = express.Router();

router.post("/", postProduct);

router.get("/", getAllProducts);

router.get("/:id", getProductById);

//update a product
router.put("/:id", updateProductById);

//delete a product
router.delete("/:id", deleteProduct);

module.exports = router;
