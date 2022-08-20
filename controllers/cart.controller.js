const { Cart } = require("../models");
const { User } = require("../models");
const { Op } = require("sequelize");

// 장바구니 조회
const getCart = async (req, res) => {
  try {
    const { userId } = res.local.user;

    const cart = await Cart.findAll({
      where: {
        userId,
      },
    });
    res.json({ cart });
  } catch (error) {
    console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
    return res.status(400).json({
      errorMessage: "장바구니 조회에 실패하였습니다.",
    });
  }
};

// 장바구니 등록, 갯수 수정
const postCart = async (req, res) => {
  try {
    const { userId } = res.local.user;
    const { productId } = req.params;
    const { quantity } = req.body;

    const existCart = await Cart.findOne({
      where: {
        userId,
        productId,
      },
    });

    if (existCart) {
      existCart.quantity = quantity;
      await existCart.save();

    } else {
      await Cart.create({
        quantity,
      });
    }
    res
      .status(201)
      .json({ success: true, message: "장바구니를 등록하였습니다." });
  } catch (error) {
    const message = `${req.method} ${req.originalUrl} : ${error.message}`;
    console.log(message);
    res.status(400).json({ errorMessage: "장바구니 등록에 실패하였습니다." });
  }
};

// 장바구니 삭제
const deleteCart = async (req, res) => {
  const { userId } = res.locals.user;
  const { productId } = req.params;

  const existCart = await Cart.findOne({
    where: {
      userId,
      productId,
    },
  });

  if (existCart) {
    await existCart.destroy();
  }
  res.status(200).json({ success: true, message: "장바구니 상품을 삭제하였습니다." });
};

module.exports = {
  getCart,
  postCart,
  deleteCart,
};
