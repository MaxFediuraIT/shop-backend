import Joi from "joi";
import { Schema, model } from "mongoose";
import { createOrder } from "./schema.js";

export const Order = model("Order", createOrder(Schema));

export const joiOrderSchema = Joi.object({
    userId: Joi.string().required(),
    products: Joi.array().required(),
})

export const joiUpdateOrderSchema = Joi.object({
    userId: Joi.string(),
    products: Joi.array(),
})