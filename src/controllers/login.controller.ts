import { Request, Response } from "express";
import loginService from "../services/login/login.service";

const loginController = async (req: Request, res: Response) => {
  const user = req.body;

  const data = await loginService(user);

  return res.status(200).json(data);
};

export { loginController };
