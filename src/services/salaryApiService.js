import db from "../models/index";

const getAllSalary = async () => {
  try {
    let data = await db.Job.findAll({ attributes: ["id", "salary"] });
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
  getAllSalary,
};
