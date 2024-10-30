import { sendDataResponse } from '../../helpers/sendDataResponse.js';
import {  createNewOrder,  getOrderById } from './repositories.js';

export const createOrder = async (id) => {
    const userId = id
    try {
        const orderExist = await getOrderById(userId); 

        if (!orderExist) {
            return await createNewOrder(userId);
        }
        else {
            return orderExist
        }
    } catch (error) {
        sendDataResponse(500, null, error)
    }
}

export const getOrder = async (id) => {
    const userId = id
    try {
        return  await getOrderById(userId);
    } catch (error) {
        sendDataResponse(500, null, error)
    }
}

export const updateShoppingCard = async (products, userId) => {
    try {
        const shoppingCardExist = await getOrderById(userId);
        if (shoppingCardExist) return await shoppingCardExist.updateOne({ products }).save()   
    } catch (error) {
        sendDataResponse(500, null, error)
    }
}

export const deleteShoppingCard = async (userId) => {
    try {
        const shoppingCardExist = await getOrderById(userId);
        if (shoppingCardExist) return await shoppingCardExist.deleteOne().sace();
    } catch (error) {
        sendDataResponse(500, null, error)
    }
}