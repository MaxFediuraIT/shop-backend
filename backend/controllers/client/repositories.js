import { Client, Product,  Order } from "../../models/index.js";
import {  createOrder } from "../order/controller.js";

export const updateClientInfo = async (id, newData) => {
  await Client.findByIdAndUpdate(id, newData, { new: true });
};

export const findProductById = async (id) => {
  return await Product.findById(id);
};

export const findProductByName = async (name) => {
  return await Product.findOne({ name });
};

export const addProduct = async (newProduct, userId) => {
  const shoppingCard = await createOrder(userId);
  await shoppingCard.products.push(newProduct).save();
};
