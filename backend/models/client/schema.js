export const createClient = (ShcemaCreator) => {
    const schema = new ShcemaCreator({
        name: {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        authId: {
            type: ShcemaCreator.Types.ObjectId,
            required: true,
            ref: 'Auth',
            index: true
        },
        productIds: {
            type: [ShcemaCreator.Types.ObjectId],
            ref: 'Product',
            default: []
        },
    }, { timestamps: true, versionKey: false });

    return schema;
}