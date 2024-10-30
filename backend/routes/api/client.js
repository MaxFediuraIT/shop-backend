import {Router} from "express";
import { ctrlWrapper, auth } from "../../midleware/index.js";
import * as Controller from "../../controllers/index.js";

const clientRouter = Router();
const { ClientController } = Controller;

clientRouter.post(
  "updatePersonalInfo",
  auth,
  ctrlWrapper(ClientController.updatePersonalInfo)
);

clientRouter.post(
  "/addPost",
  auth,
  ctrlWrapper(ClientController.addProductToOrder)
);

// clientRouter.post('/getCart', auth, ctrlWrapper(ClientController.getCart));
export { clientRouter }