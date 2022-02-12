import { response } from "express";
import { Product } from "../models/index.js";

// Controller get all Products
export const getAllProducts = async (request, response) => {
  console.log("Get all Products");
  try {
    const products = await Product.find();
    if (products.length > 0) response.status(200).json(products);
    else response.status(204).send();
  } catch (error) {
    response.status(500).json({ error });
  }
};

// Controller get One Product
export const getOneProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.json(product);
};

// Controller post Create One Product
export const createProduct = async (req, res) => {
  // console.log(Object.keys(req.body).length);
  try {
    const product = new Product(req.body);
    const newProduct = await product.save();
    newProduct && res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// //controller put Update Product
// export const updateProduct = async (req, res) => {
//   const { id } = req.params;
//   const productUpdate = req.body;

//   const product = await Product.findById(id);
//   console.log(product);
//   Product.updateOne(product, productUpdate, (err, data) => {
//     if (!err) res.status(200).json(data);
//     else res.status(500).send(err);
//   });
// };

//controller delete Delete Product
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const productToDelete = await Product.findById(id); // devuelve null si ya esta eliminado

  try {
    if (!productToDelete) res.status(204).send();
    else {
      const deletedProduct = await Product.deleteOne(productToDelete);
      res.status(200).json(deletedProduct);
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

// ///////////////////////
// ///////////////////////
// ///////////////////////
// ///////////////////////
export const findProduct = async (req, res, next) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    if (product) {
      req.data = { product: product };
      next();
    } else res.status(204).send();
  } catch (error) {
    res.status(500).json({ error });
  }
};
export const updateProduct = async (req, res, next) => {
  const productUpdate = req.body;
  const { product } = req.data;

  try {
    Product.updateOne(product, productUpdate, (err, data) => {
      if (!err) res.status(200).json(data);
      else res.status(500).send(err);
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};
