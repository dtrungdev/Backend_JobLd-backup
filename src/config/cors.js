require("dotenv").config();

const configCors = (app) => {
    app.use(function (req, res, next) {
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        res.setHeader(
            "Access-Control-Allow-Methods",
            "GET, POST, UPDATE, OPTIONS, PUT, PATCH, DELETE"
        );
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        res.setHeader("Access-Control-Allow-Credentials", true);
        next();
    });
};
export default configCors;
