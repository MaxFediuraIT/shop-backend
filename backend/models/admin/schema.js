export const   createAdmin = (Schema) => {
    const adminSchema = new Schema({
        name: {
            type: String,
            required: true,
        },
        surname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        }
    }, { timestamps: true, versionKey: false });
    return adminSchema;
}