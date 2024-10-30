import Joi from "joi";
import { Schema, model } from "mongoose";
import { createAdmin } from "./schema.js";

export const Admin = model("Admin", createAdmin(Schema));

export const joiAdminSchema = Joi.object({
    name: Joi.string().required(),
    surname: Joi.string().required(),
    email: Joi.string().required(),
    phoneNumber: Joi.string().required(),
});

export const joiUpdateAdminSchema = Joi.object({
    name: Joi.string(),
    surname: Joi.string(),
    email: Joi.string(),
    phoneNumber: Joi.string(),
})
