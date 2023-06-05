import { idText } from "typescript";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { userSchema } from "../../schemas/user.schema";
import exp from "constants";

const getUserSevice = async (userId: string) => {
  const userRepository = AppDataSource.getTreeRepository(User);

  const user = await userRepository.findOneBy({
    id: userId,
  });

  const validatedUser = userSchema.parse(user);

  return validatedUser;
};

export default getUserSevice;
