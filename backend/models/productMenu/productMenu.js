import Joi from "joi";
import { Schema, model } from "mongoose";
import { createProductMenu } from "./schema.js";

export const ProductMenu = model("ProductMenu", createProductMenu(Schema));

export const joiProductMenuSchema = Joi.object({
  name: Joi.string().required(),
  products: Joi.array().required(),
});

export const joiUpdateProductMenuSchema = Joi.object({
  name: Joi.string(),
  products: Joi.array(),
});
