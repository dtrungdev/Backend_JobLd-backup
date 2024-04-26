import db from "../models";
require("dotenv").config();
import bcrypt from "bcrypt";
import { createJWT } from "../middleware/JWTActions";
import getRoles from "./JWTService";

const saltRounds = 10;

const hashUserPassword = (userPassword) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

const checkEmailExist = async (userEmail) => {
  let user = await db.User.findOne({
    where: { email: userEmail },
  });

  if (user) {
    return true;
  }
  return false;
};

const registerNewUser = async (rawUserData) => {
  try {
    //check email is already exist
    let isEmailExist = await checkEmailExist(rawUserData.email);
    if (isEmailExist === true) {
      return {
        EM: "The email is already exist",
        EC: 1,
      };
    }
    //hash user password
    let hashPassword = await hashUserPassword(rawUserData.password);
    //create new user
    await db.User.create({
      fullname: rawUserData.fullname,
      email: rawUserData.email,
      password: hashPassword,
      roleId: 10,
    });

    return {
      EM: "A user is created successfully!",
      EC: 0,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Something wrong with service...",
      EC: -1,
    };
  }
};

const checkPassword = (inputPassword, hashPassword) => {
  return bcrypt.compareSync(inputPassword, hashPassword);
};

const handleUserLogin = async (rawData) => {
  try {
    //find Is email exist on system ???
    let user = await db.User.findOne({
      where: {
        email: rawData.email,
      },
    });
    if (user) {
      console.log(">>> found user with email");
      let isCorrectPassword = checkPassword(rawData.password, user.password);
      if (isCorrectPassword === true) {
        // let roles = await getRoles(user);
        let payload = {
          email: user.email,
          expiresIn: process.env.JWT_EXPIRES_IN,
        };
        let token = createJWT(payload);
        return {
          EM: "ok",
          EC: 0,
          DT: { access_token: token },
        };
      }
    }
    console.log(
      ">>> Input user with email: ",
      rawData.email,
      "password: ",
      rawData.password
    );
    return {
      EM: "Thông tin bạn nhập không đúng!",
      EC: 1,
      DT: "",
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Something wrong with service...",
      EC: -1,
    };
  }
};

module.exports = {
  registerNewUser,
  handleUserLogin,
};
