import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { userListSchema } from "../../schemas/user.schema";

const listUserService = async () => {
  const userRepository = AppDataSource.getTreeRepository(User);

  const users = await userRepository.find();

  const validatedUser = userListSchema.parse(users);

  return validatedUser;
};

export default listUserService;
