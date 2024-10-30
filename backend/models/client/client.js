import Joi from 'joi';
import { Schema, model } from 'mongoose';
import { createClient } from './schema.js';

export const Client = model('Client', createClient(Schema));

export const joiClientSchema = Joi.object({
    name: Joi.string().required(),
    surname: Joi.string().required(),
    email: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    authId: Joi.string().required(),
});

export const joiUpdateClientSchema = Joi.object({
    name: Joi.string(),
    surname: Joi.string(),
    phoneNumber: Joi.string(),
})

