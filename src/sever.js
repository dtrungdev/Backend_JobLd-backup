require("dotenv").config();
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import configViewEngine from "./config/viewEngine.js";
import configCors from "./config/cors.js";
import initWebRoutes from "./routes/web.js";
import initApiRoutes from "./routes/api.js";
import connection from "./config/connectDB.js";
import { createJWT } from "./middleware/JWTActions.js";

const app = express();
const PORT = process.env.PORT || 8080;

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config cookie-parser
app.use(cookieParser());

// config CORS
configCors(app);

//config viewEngine
configViewEngine(app);

// test connection DB
connection();

//test JWT
createJWT();

//init Web Routes
initWebRoutes(app);
initApiRoutes(app);

app.listen(PORT, () => {
  console.log("Backend is running on the port =" + PORT);
});
