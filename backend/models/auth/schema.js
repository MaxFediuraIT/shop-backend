export const createAuth = (ShcemaCreator, bcrypt) => {
  const schema = new ShcemaCreator(
    {
      username: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      token: {
        type: String,
        require: false,
        default: null,
      },
      refreshToken: {
        type: String,
        require: false,
        default: null,
      },
      role: {
        type: String,
        enum: ["client", "admin"],
        require: true,
      },
      personalInfo: {
        type: ShcemaCreator.Types.Mixed,
        default: {},
      },
      adminId: {
        type: ShcemaCreator.Types.ObjectId,
        require: false,
      },
      clientId: {
        type: ShcemaCreator.Types.ObjectId,
        require: false,
      },
    },
    { timestamps: true, versionKey: false }
  );

  schema.methods.setPassword = async function (password) {
    this.password = await bcrypt.hash(password, 10);
  };

  schema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

  return schema;
};
