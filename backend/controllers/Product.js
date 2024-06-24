import Products from "../models/ProductModel.js";
import User from "../models/UsersModel.js";

export const getProducts = async (req, res) => {
  try {
    let response;
    if (req.role === "admin") {
      response = await Products.findAll({
        include: [
          {
            model: User,
          },
        ],
      });
    } else {
      response = await Products.findAll({
        where: {
          userId: req.userId,
        },
        include: [
          {
            model: User,
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getProductById = async (req, res) => {};
export const createProduct = async (req, res) => {
  const { name, price } = req.body;
  try {
    await Products.create({
      name: name,
      price: price,
      userId: req.userId,
    });
    res.status(200).json({ msg: "Product created successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const updateProduct = async (req, res) => {};
export const deleteProduct = async (req, res) => {};
