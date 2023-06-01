import { Request, Response, NextFunction } from "express";
import { Contact } from "../entities/contact.entity";
import { AppError } from "../errors/AppError";
import AppDataSource from "../data-source";

const verifyIsContactOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const contactRepository = AppDataSource.getRepository(Contact);
    const userId = req.user.id;

    const contact: any = await contactRepository.findOne({
      where: { id: req.params.id },
      relations: {
        user: true,
      },
    });

    if (userId !== contact.user.id) {
      throw new AppError("You do not own this contact", 409);
    }

    return next();
  } catch (error: any) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }
};

export default verifyIsContactOwnerMiddleware;
