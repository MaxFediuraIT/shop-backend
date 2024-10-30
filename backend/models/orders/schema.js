export const createOrder = (Schema) => {
    const OrderSchema = new Schema(
        {
            userId: {
                type: String,
                required: true,
            },
            products: {
                type: Array,
                default: [],
            },
        },
        { timestamps: true }
    );
    return OrderSchema;
}