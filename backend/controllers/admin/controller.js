import {
  getAllCients,
  updateProductById,
  deleteProductById,
  createNewProduct,
  createNewProductMenu,
  updateProductMenuById,
  deleteProductMenuById,
} from "./repositories.js";
import { sendDataResponse } from "../../helpers/sendDataResponse.js";

export const getCients = async (req, res) => {
  try {
    const clients = await getAllCients();
    res.json(clients);
  } catch (error) {
    res.json({ message: error });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id, product } = req.body;
    const updatedProduct = await updateProductById(id, product);
    res.json(updatedProduct);
  } catch (error) {
    res.json({ message: error });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedProduct = await deleteProductById(id);
    res.json(deletedProduct);
  } catch (error) {
    res.json({ message: error });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = req.body;

    if (!product) sendDataResponse(res, 400, null, "product is required");

    const createdProduct = await createNewProduct(product);

    res.json(createdProduct);
  } catch (error) {
    res.json({ message: error });
  }
};
// export const getProducts = async (req, res) => {
//   try {
//     const products = await getAllProducts();
//     res.json(products);
//   } catch (error) {
//     res.json({ message: error });
//   }
// };

export const createProductMenu = async (req, res) => {
  try {
    const { name, products } = req.body;
    if (!products) sendDataResponse(res, 400, null, "productMenu is required");

    const createdProductMenu = await createNewProductMenu(name, products);

    res.json(createdProductMenu);
  } catch (error) {
    res.json({ message: error });
  }
};
export const updateProductMenu = async (req, res) => {
  try {
    const { id, products } = req.body;
    const updatedProductMenu = await updateProductMenuById(id, products);
    res.json(updatedProductMenu);
  } catch (error) {
    res.json({ message: error });
  }
};

export const deleteProductMenu = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedProductMenu = await deleteProductMenuById(id);
    res.json(deletedProductMenu);
  } catch (error) {
    res.json({ message: error });
  }
};
