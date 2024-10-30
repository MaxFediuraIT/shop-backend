import { handleDatabaseOperation } from "../../helpers/index.js";
import { Auth, Client, Admin } from "../../models/index.js";
import bcrypt from "bcryptjs";

export const findByUserName = async (username) => {
  // handleDatabaseOperation(async () => {
  return await Auth.findOne({ username });
  // });
};

export const updateToken = async (userId, token, expiresIn) => {
  // handleDatabaseOperation(async () => {
  await Auth.updateOne(
    { _id: userId },
    { token, expiresToken: expiresIn },
    {
      new: true,
    }
  );
  // });
};

export const createUser = async (username, password, role, personalInfo) => {
  // handleDatabaseOperation(async () => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUserAuth = new Auth({ username, password: hashedPassword, role });
  const savedAuth = await newUserAuth.save();

  let userProfile;
  switch (role) {
    case "admin":
      userProfile = new Admin({ authId: savedAuth._id, ...personalInfo });
      break;
    case "client":
      userProfile = new Client({ authId: savedAuth._id, ...personalInfo });
      break;
  }
  const savedProfile = await userProfile.save();

  const roleId = `${role}Id`;

  newUserAuth[roleId] = savedProfile._id;

  await newUserAuth.save();

  return { savedAuth };
  // });
};
