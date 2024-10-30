// import { deleteProduct } from "../admin";
import { getAllProducts, getProductById } from "./repositories.js";

// export const createProduct = async (product) => {
//     try {
//         return  await createNewProduct(product);
//         } catch (error) {
//         console.log(error);
//     }
// }

export const getProduct = async (id) => {
  try {
    return await getProductById(id);
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    console.log(error);
  }
};

// export const updateProduct = async (id, product) => {
//     try {
//         return await updateProductById(id, product);
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const deleteProduct = async (id) => {
//     try {
//         return await deleteProductById(id);
//     } catch (error) {
//         console.log(error);
//     }
// }
