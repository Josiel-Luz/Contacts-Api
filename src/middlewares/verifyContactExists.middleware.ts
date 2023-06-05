import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";
import { Contact } from "../entities/contact.entity";
import AppDataSource from "../data-source";

const verifyIfContactExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const contactId = req.params.id;
    const ContactRepository = AppDataSource.getRepository(Contact);

    const contact = await ContactRepository.findOneBy({
      id: contactId,
    });

    if (!contact) {
      throw new AppError("Contact not fonud", 404);
    }

    return next();
  } catch (error: any) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }
};

export default verifyIfContactExistsMiddleware;
