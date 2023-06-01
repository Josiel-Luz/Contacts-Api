import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUserRequest } from "../../interfaces/user.interfaces";
import { userSchema } from "../../schemas/user.schema";

const createUserService = async (data: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);

  const newUser = userRepository.create(data);
  await userRepository.save(newUser);

  const validatedUser = userSchema.parse(newUser);

  return validatedUser;
};

export default createUserService;
