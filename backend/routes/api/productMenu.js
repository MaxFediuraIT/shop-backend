import { Router } from "express";
import { ctrlWrapper } from "../../midleware/index.js";
import * as Controller from "../../controllers/index.js";

const productMenuRouter = Router();
const { ProductMenuController } = Controller;

productMenuRouter.get(
  "/getProductMenus",
  ctrlWrapper(ProductMenuController.getProductMenus)
);

productMenuRouter.get(
  "/getProductsByProductMenuName",
  ctrlWrapper(ProductMenuController.getProductsFromProductMenu)
);

export { productMenuRouter };
