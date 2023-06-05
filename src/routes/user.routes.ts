import { Router } from "express";
import verifySchemaMiddleware from "../middlewares/verifySchema.middleware";
import { userRequestSchema, userUpdateSchema } from "../schemas/user.schema";
import {
  createUserController,
  deleteUserController,
  getProfileController,
  listUsersController,
  updateUserController,
} from "../controllers/user.controller";
import verifyTokenMidddleware from "../middlewares/verifyToken.middleware";
import verifyUserAlreadyMiddleware from "../middlewares/verifyUserAlredyExists.middleware";

const UserRouter = Router();

UserRouter.post(
  "",
  verifySchemaMiddleware(userRequestSchema),
  verifyUserAlreadyMiddleware,
  createUserController
);
UserRouter.get("", verifyTokenMidddleware, listUsersController);
UserRouter.get("/profile", verifyTokenMidddleware, getProfileController);
UserRouter.patch(
  "",
  verifySchemaMiddleware(userUpdateSchema),
  verifyTokenMidddleware,
  updateUserController
);
UserRouter.delete("", verifyTokenMidddleware, deleteUserController);

export default UserRouter;
