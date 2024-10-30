export const createProduct = (Schema) => {
  const productSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      category: {
        type: String,
        enum: ["shoes", "clothes", "accessories"],
        required: true,
      },
    },
    { timestamps: true, versionKey: false }
  );
  return productSchema;
};
