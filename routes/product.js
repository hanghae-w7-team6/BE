const express = require('express');
const router = express.Router();
const {
    // getAllProduct,
    // getCategory,
    // getdetail,
    postProduct,
} = require("../controllers/product.controller");

router.route("/").post(postProduct);


module.exports = router;