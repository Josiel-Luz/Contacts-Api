import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserLogin } from "../../interfaces/user.interfaces";
import { AppError } from "../../errors/AppError";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const loginService = async ({
  email,
  password,
}: IUserLogin): Promise<{ token: string }> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: email,
  });

  if (!user) {
    throw new AppError("Email or password invalid", 403);
  }

  const verifyPassword = await compare(password, user.password);

  if (!verifyPassword) {
    throw new AppError("Email or password invalid", 403);
  }

  const token = jwt.sign({}, `${process.env.SECRET_KEY}`, {
    subject: String(user.id),
    expiresIn: "24h",
  });

  return { token: token };
};

export default loginService;
