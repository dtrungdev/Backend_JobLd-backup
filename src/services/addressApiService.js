import db from "../models/index";

const getAllProvince = async () => {
    try {
        let data = await db.Address.findAll({ attributes: ["id", "province"] });
        return {
            EM: "Get all Province/city",
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

module.exports = { getAllProvince };
