import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import Joi from "joi";
import { joiPasswordExtendCore } from "joi-password";
import { createAuth } from "./schema.js";

const joiPassword = Joi.extend(joiPasswordExtendCore);

const authSchema = createAuth(Schema, bcrypt);

export const Auth = model("Auth", authSchema);

const joiAuthSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  refreshToken: Joi.string().optional(),
  role: Joi.string().valid("client", "admin").required(),
  adminId: Joi.string().allow(""),
  clientId: Joi.string().allow(""),
});

export const joiSignUpSchema = Joi.object({
  auth: joiAuthSchema.required(),
  personalInfo: Joi.object().required(),
});

export const joiLoginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const joiUpdatePasswordSchema = Joi.object({
  password: joiPassword.string().required(),
});
