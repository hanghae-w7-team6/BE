const express = require('express');
const router = express.Router();
const {
    getAllProduct,
    getCategory,
    getdetail,
    postProduct,
    deleteProduct,
} = require("../controllers/product.controller");

router.route("/").post(postProduct).get(getAllProduct);
router.route("/:productId").get(getdetail).delete(deleteProduct);
router.route("/search/:category").get(getCategory);

module.exports = router;