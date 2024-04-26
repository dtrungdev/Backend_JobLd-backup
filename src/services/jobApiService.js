import db from "../models/index";
import { Op } from "sequelize";

const getJob = async (page, limit, title) => {
    try {
        let offset = (page - 1) * limit;
        const { count, rows } = await db.Job.findAndCountAll({
            attributes: ["id", "title", "salary", "categoryId"],
            offset: offset,
            limit: limit,
            distinct: true,
            where: {
                title: {
                    [Op.like]: `%${title}%`,
                },
            },
        });
        let totalPages = Math.ceil(count / limit);

        let data = {
            totalRows: count,
            totalPages: totalPages,
            jobs: rows,
        };
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

const getJobInProvince = async (page, limit, rawData) => {
    try {
        let offset = (page - 1) * limit;
        const { count, rows } = await db.Job.findAndCountAll({
            attributes: ["id", "title", "salary", "categoryId"],
            offset: offset,
            limit: limit,
            distinct: true,
            include: {
                model: db.Company,
                attributes: ["id", "name"],
                include: {
                    model: db.Province,
                    attributes: ["id", "name"],
                    where: {
                        id: +rawData.provinceId,
                    },
                    through: {
                        attributes: [],
                    },
                },
            },
        });
        let totalPages = Math.ceil(count / limit);

        let data = {
            totalRows: count,
            totalPages: totalPages,
            jobs: rows,
        };
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

const getJobWithPosition = async (page, limit, rawData) => {
    try {
        ///compare data
        /////////
        let offset = (page - 1) * limit;
        const { count, rows } = await db.Job.findAndCountAll({
            attributes: ["id", "title", "salary", "categoryId", "positionId"],
            offset: offset,
            limit: limit,
            distinct: true,
            include: {
                model: db.Company,
                attributes: ["id", "name"],
                include: {
                    model: db.Position,
                    attributes: ["id", "name"],
                    where: {
                        name: rawData.position,
                    },
                    through: {
                        attributes: [],
                    },
                },
            },
        });
        let totalPages = Math.ceil(count / limit);

        let data = {
            totalRows: count,
            totalPages: totalPages,
            jobs: rows,
        };
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

const getJobWithPositionInProvince = async (page, limit, rawData) => {
    try {
        let offset = (page - 1) * limit;
        const { count, rows } = await db.Job.findAndCountAll({
            attributes: ["id", "title", "salary", "categoryId", "positionId"],
            offset: offset,
            limit: limit,
            distinct: true,
            where: {
                name: rawData.positionId,
            },
            include: {
                model: db.Company,
                attributes: ["id", "name"],
                include: {
                    model: db.Province,
                    attributes: ["id", "name"],
                    where: {
                        name: rawData.provinceId,
                    },
                    through: {
                        attributes: [],
                    },
                },
            },
        });
        let totalPages = Math.ceil(count / limit);

        let data = {
            totalRows: count,
            totalPages: totalPages,
            jobs: rows,
        };
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

const getJobPosition = async () => {
    try {
        let data = await db.Position.findAll({ attributes: ["id", "name"] });
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

const sortJobBySalary = () => {
    {
        if (salary) {
        }
    }
};

module.exports = {
    getJob,
    getJobInProvince,
    getJobWithPosition,
    getJobWithPositionInProvince,
    getJobPosition,
};
