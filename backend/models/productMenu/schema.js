
export const createProductMenu = (Schema) => {
  return new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      products: {
        type: Array,
        required: true,
        ref: "Product",
      },
    },
    { timestamps: true, versionKey: false }
  );
};
