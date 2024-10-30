import { ProductMenu } from "../../models/index.js";


export const getAllProductMenus = async () => {
  try {
    return await ProductMenu.find();
  } catch (error) {
    console.log(error);
  }
};

export const getAllProducts = async (name) => {
    try {
        const productMenu = await ProductMenu.findOne({ name });
        return productMenu.products;
    } catch (error) {
        console.log(error);
    }
}