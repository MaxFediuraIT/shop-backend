import { Product } from "../../models/index.js";

// export const createNewProduct = async (product) => {
//     try {
//         return new Product(product).save();
//     } catch (error) {
//         console.log(error);
//     }
// }

export const getProductById = async (id) => {
  try {
    return await Product.findById(id);
  } catch (error) {
    console.log(error);
  }
};
export const getAllProducts = async () => {
  try {
    return await Product.find();
  } catch (error) {
    console.log(error);
  }
};

// export const updateProductById = async (id, product) => {
//     try {
//         return await Product.findByIdAndUpdate(id, product, { new: true });
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const deleteProductById = async (id) => {
//     try {
//         return await Product.findByIdAndDelete(id);
//     } catch (error) {
//         console.log(error);
//     }
// }
