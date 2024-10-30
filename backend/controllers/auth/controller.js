import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { findByUserName, updateToken, createUser } from "./repositories.js";
import { sendDataResponse } from "../../helpers/index.js";

const SECRET_KEY = process.env.SECRET_KEY;

export const login = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await findByUserName(username);
    if (!user) {
      sendDataResponse(res, 404, "User not found");
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      sendDataResponse(res, 401, "Wrong password");
    }

    const expiresIn = 84600;
    const token = jwt.sign({ id: user._id }, SECRET_KEY, {
      expiresIn: expiresIn,
    });

    await updateToken(user._id, token, expiresIn);

    sendDataResponse(
      res,
      200,
      {
        userId: user._id,
        username: user.username,
        adminId: user.adminId,
        clientId: user.clientId,
        token: token,
        expiresIn: expiresIn,
      },
      "User logged in successfully"
    );
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res, next) => {
  const { auth, personalInfo } = req.body;
  const { username, password, role } = auth;

  try {
    const existingUser = await findByUserName(username);
    if (existingUser) {
      return sendDataResponse(res, 409, "User already exists");
    }

    const data = await createUser(username, password, role, personalInfo);
    const { savedAuth } = data;

    const expiresIn = 84600;

    const token = jwt.sign({ id: savedAuth._id, role }, SECRET_KEY, {
      expiresIn: expiresIn,
    });

    await updateToken(savedAuth._id, token, expiresIn);

    savedAuth.save()
    return sendDataResponse(
      res,
      201,
      savedAuth,
      "User registered successfully"
    );
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  const { userId } = req.user._id;
  try {
    await updateToken(userId, null, null);
    sendDataResponse(res, 200, "User logged out successfully");
  } catch (error) {
    next(error);
  }
};
