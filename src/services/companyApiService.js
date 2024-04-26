import db from "../models/index";

const getAllCompany = async () => {
  try {
    let data = await db.Company.findAll({ attributes: ["id", "name"] });
    return {
      EM: "fetch ok",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Something wrong with service...",
      EC: -1,
      DT: "",
    };
  }
};

module.exports = {
  getAllCompany,
};
