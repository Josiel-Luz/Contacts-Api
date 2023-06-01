import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";

const verifyUserAlreadyMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userRepository = AppDataSource.getRepository(User);

    const userByEmail = await userRepository.findOneBy({
      email: req.body.email,
    });

    if (userByEmail) {
      throw new AppError("This email is already being used", 409);
    }

    const userByPhone = await userRepository.findOneBy({
      phone: req.body.phone,
    });

    if (userByPhone) {
      throw new AppError("This phone is already being used", 409);
    }

    return next();
  } catch (error: any) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }
};

export default verifyUserAlreadyMiddleware;
