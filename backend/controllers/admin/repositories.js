import { Client, Product, ProductMenu } from "../../models/index.js";

export const getAllCients = async () => {
  try {
    return await Client.find();
  } catch (error) {
    console.log(error);
  }
};

export const updateProductById = async (id, product) => {
  try {
    return Client.findByIdAndUpdate(id, product, { new: true });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProductById = async (id) => {
  try {
    return Client.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
};

export const createNewProduct = async (product) => {
  //   const { name, description, price, category } = product;
  try {
    const newProduct = new Product(product);
    return await newProduct.save();
  } catch (error) {
    console.log(error);
  }
};

// export const getAllProducts = async () => {
//   try {
//     return await Product.find();
//   } catch (error) {
//     console.log(error);
//   }
// }
export const createNewProductMenu = async (name, products) => {
  try {
    return await new ProductMenu({ name, products }).save();
  } catch (error) {
    console.log(error);
  }
};
export const updateProductMenuById = async (id, products) => {
  try {
    return await ProductMenu.findByIdAndUpdate(id, products, { new: true });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProductMenuById = async (id) => {
  try {
    return await ProductMenu.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
};
