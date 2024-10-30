import Joi from "joi";
import { Schema, model } from "mongoose";
import { createProduct } from "./schema.js";

export const Product = model("Product", createProduct(Schema));

export const joiProductSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string().required(),
});

export const joiUpdateProductSchema = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
  price: Joi.number(),
  category: Joi.string(),
});
