import { Router } from "express";
const authRouter = Router();
import * as Controller from "../../controllers/index.js";
import { validation, ctrlWrapper, auth } from "../../midleware/index.js";
import { joiSignUpSchema, joiLoginSchema } from "../../models/index.js";

const { AuthController } = Controller;

authRouter.post(
  "/register",
  validation(joiSignUpSchema),
  ctrlWrapper(AuthController.register)
);

authRouter.post(
  "/login",
  validation(joiLoginSchema),
  ctrlWrapper(AuthController.login)
);

authRouter.post("/logout", auth, ctrlWrapper(AuthController.logout));

export { authRouter };
