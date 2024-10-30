import { Router } from "express";
import { ctrlWrapper } from "../../midleware/index.js";
import * as Controller from "../../controllers/index.js";

const productRouter = Router();
const { ProductController } = Controller;

productRouter.get("/getProducts", ctrlWrapper(ProductController.getProducts));

productRouter.get("/getProduct", ctrlWrapper(ProductController.getProduct));

export { productRouter }