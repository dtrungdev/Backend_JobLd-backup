import jwt from "jsonwebtoken";
require("dotenv").config();
import getRoles from "../services/JWTService";
const createJWT = (payload) => {
  let key = process.env.JWT_SECRET;
  let token = null;

  try {
    token = jwt.sign(payload, key);
  } catch (error) {
    console.log(error);
  }
  return token;
};

const verifyToken = () => {
  let key = process.env.JWT_SECRET;
  let decoded = null;
  try {
    decoded = jwt.verify(token, key);
  } catch (error) {
    console.log(error);
  }
  return decoded;
};

const checkUserJWT = (req, res, next) => {
  let cookies = req.cookies;
  if (cookies && cookies.jwt) {
    let token = cookies.jwt;
    let decoded = verifyToken(token);

    if (decoded) {
      req.user = decoded;
      next();
    } else {
      return res.status(401).json({
        EC: -1,
        EM: "Not Authenticated the user",
        DT: "",
      });
    }
  } else {
    return res.status(401).json({
      EC: -1,
      EM: "Not Authenticated the user",
      DT: "",
    });
  }
  console.log(cookies);
};

const checkUserPermission = (req, res, next) => {
  if (req.user) {
    let email = req.user.email;
    let roles = req.user.getRoles;
    let currentPath = req.path;

    let canAccess = roles;

    if (canAccess) {
    } else {
      return res.status(401).json({
        EC: -1,
        EM: "Not Authenticated the user",
        DT: "",
      });
    }
  } else {
    return res.status(401).json({
      EC: -1,
      EM: "Not Authenticated the user",
      DT: "",
    });
  }
};
module.exports = { createJWT, verifyToken, checkUserJWT, checkUserPermission };
