const { Product } = require("../models");

// 상품등록(Admin)
const postProduct = async (req,res) => {
    try {
    const { productImage, productName, price, desc, category } = req.body;

    await Product.create({
        productImage,
        productName,
        price,
        desc,
        category,
    });
    res.status(201).json({ success: true, message: "상품을 등록하였습니다." });
    } catch (error) {
        const message = `${req.method} ${req.originalUrl} : ${error.message}`;
        console.log(message);
        res.status(400).json({ errorMessage: "상품 등록에 실패하였습니다." });
    }
}



module.exports = {
    postProduct,
}