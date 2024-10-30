import { Order } from "../../models/index.js";

export const createNewOrder = async (userId) => {
    try {
        return await new Order(userId).save();
    } catch (error) {
        console.log(error)
    }
}


export const getOrderById = async (userId) => {
    try {
        const card = await Order.findOne({ userId });
        return card ? card : null
    } catch (error) {
        console.log(error)
    }
}


