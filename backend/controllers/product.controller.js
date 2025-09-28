import products from "../data/products.js";

// GET all products
export const getProducts = (req, res) => {
  res.json(products);
};
