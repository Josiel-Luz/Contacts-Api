import { Router } from "express";
import verifySchemaMiddleware from "../middlewares/verifySchema.middleware";
import { loginScherma } from "../schemas/user.schema";
import { loginController } from "../controllers/login.controller";

const LoginRouter = Router();

LoginRouter.post("", verifySchemaMiddleware(loginScherma), loginController);

export default LoginRouter;
