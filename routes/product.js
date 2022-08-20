const express = require('express');
const router = express.Router();
const {
    getAllProduct,
    getCategory,
    getDetail,
    postProduct,
    deleteProduct,
} = require("../controllers/product.controller");

router.route("/").post(postProduct).get(getAllProduct);
router.route("/:productId").get(getDetail).delete(deleteProduct);
router.route("/search/:category").get(getCategory);

module.exports = router;