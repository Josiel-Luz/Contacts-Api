import { Request, Response } from "express";
import { IUserRequest, IUserUpdate } from "../interfaces/user.interfaces";
import createUserService from "../services/user/createUser.service";
import listUserService from "../services/user/listUser.service";
import getUserSevice from "../services/user/getUser.service";
import updateUserService from "../services/user/updateUser.service";
import deleteUserService from "../services/user/deleteUser.service";

const createUserController = async (req: Request, res: Response) => {
  const data: IUserRequest = req.body;

  const response = await createUserService(data);

  return res.status(201).json(response);
};

const listUsersController = async (req: Request, res: Response) => {
  const response = await listUserService();

  return res.json(response);
};

const getProfileController = async (req: Request, res: Response) => {
  const userId: string = req.user.id;

  const response = await getUserSevice(userId);

  res.json(response);
};

const updateUserController = async (req: Request, res: Response) => {
  const userId: string = req.user.id;
  const data: IUserUpdate = req.body;

  const response = await updateUserService(data, userId);

  return res.json(response);
};

const deleteUserController = async (req: Request, res: Response) => {
  const userId: string = req.user.id;

  const response = await deleteUserService(userId);

  return res.status(204).json();
};

export {
  createUserController,
  listUsersController,
  getProfileController,
  updateUserController,
  deleteUserController,
};
