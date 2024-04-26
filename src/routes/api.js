import express from "express";
import apiController from "../controller/apiController";
import jobController from "../controller/jobController";
import addressController from "../controller/AddressController";
import companyController from "../controller/companyController";
import experienceController from "../controller/experienceController";
import salaryController from "../controller/salaryController";
import { checkUserJWT, checkUserPermission } from "../middleware/JWTActions";

const router = express.Router();

// function checkUserLogin(req, res, next) {
//     const nonSecurePaths = ["/", "/login", "/register"];
//     if (nonSecurePaths.includes(req.path)) return next();

//     //authenticate user
//     next();
// }

const initApiRoutes = (app) => {
    // router.all("*", checkUserJWT, checkUserPermission);
    router.post("/register", apiController.handleRegister);
    router.post("/login", apiController.handleLogin);

    ///job
    router.post("/job/create", jobController.CreateFn);

    ////company

    router.get("/company/read", companyController.FindCompany);
    //////////

    router.get("/experience/read", experienceController.FindExperience);

    //////

    router.get("/salary/read", salaryController.FindSalary);
    ///////
    router.get("/job/read", jobController.ReadFn);
    router.get("/job/position/read", jobController.FindJobPosition);
    router.get("/find-job", jobController.FindJob);
    router.get("/find-job-with-:value", jobController.FindJob);
    router.get("/find-job-in-:location", jobController.FindJobInProvince);
    router.get(
        "/find-job-has-salary-from-:min-to-:max",
        jobController.FindJobWithPosition
    );
    router.get(
        "/find-job-in-:location-has-salary-from-:min-to-:max",
        jobController.FindJobWithPosition
    );
    router.get(
        "/find-job-with-:value-in-:location",
        jobController.FindJobWithPosition
    );
    router.get(
        "/find-job-with-:value-has-salary-from-:min-to-:max",
        jobController.FindJobWithPositionInProvince
    );
    router.get(
        "/find-job-with-:value-in-:location-has-salary-from-:min-to-:max",
        jobController.FindJobWithPositionInProvince
    );

    ////////

    router.put("/job/update"), jobController.UpdateFn;
    router.delete("/job/delete", jobController.DeleteFn);

    ///address
    router.get("/address/read", addressController.ReadAllProvince);
    return app.use("/api/v1/", router);
};

export default initApiRoutes;
