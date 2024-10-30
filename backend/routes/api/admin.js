import { Router } from "express";
import { ctrlWrapper, auth, validation } from "../../midleware/index.js";
import * as Controller from "../../controllers/index.js";
import {
  joiProductSchema,
  joiUpdateProductSchema,
} from "../../models/index.js";

const adminRouter = Router();

const { AdminController } = Controller;

adminRouter.get("/getClients",
    auth,
    ctrlWrapper(AdminController.getCients)
)
adminRouter.post(
  "/createProduct",
  auth,
  validation(joiProductSchema),
  ctrlWrapper(AdminController.createProduct)
);
adminRouter.post(
  "/updateProduct",
  auth,
  validation(joiUpdateProductSchema),
  ctrlWrapper(AdminController.updateProduct)
);
adminRouter.post(
  "/deleteProduct",
  auth,
  ctrlWrapper(AdminController.deleteProduct)
);
// adminRouter.get("/getProducts", auth, ctrlWrapper(AdminController.getProducts));
adminRouter.post(
  "/createProductMenu",
  auth,
  ctrlWrapper(AdminController.createProductMenu)
);
adminRouter.post(
  "/updateProductMenu",
  auth,
  ctrlWrapper(AdminController.updateProductMenu)
);
adminRouter.post(
  "/deleteProductMenu",
  auth,
  ctrlWrapper(AdminController.deleteProductMenu)
);

export { adminRouter };
