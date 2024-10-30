import { sendDataResponse } from "../../helpers/index.js";
import {
  updateClientInfo,
  addProduct,
  findProductByName,
} from "./repositories.js";

export const updatePersonalInfo = async (req, res, next) => {
  const { id } = req.params,
    { client } = req.body;
  try {
    await updateClientInfo(id, client);
    sendDataResponse(res, 200, "client info updated successfully");
  } catch (error) {
    next(error, "client info updating failed");
  }
};


export const addProductToOrder = async (req, res, next) => {
  const { product } = req.body;
  const { id: userId } = req.params;
  try {
    const productExist = await findProductByName(product.name);
    if (!productExist) sendDataResponse(res, 404, null, "product not found");

    await addProduct(product, userId);
    sendDataResponse(res, 200, null, "product added to card successfully");
  } catch (error) {
    next(error, "product adding to cart failed");
  }
}
