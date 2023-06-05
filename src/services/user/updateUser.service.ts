import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/user.interfaces";
import { userSchema, userUpdateSchema } from "../../schemas/user.schema";

const updateUserService = async (data: IUserUpdate, userId: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: userId,
  });

  const validatedData: any = userUpdateSchema.parse(data);

  const userUpdated = userRepository.create({
    ...user,
    ...validatedData,
  });

  await userRepository.save(userUpdated);

  const validatedUser = userSchema.parse(userUpdated);

  return validatedUser;
};

export default updateUserService;
