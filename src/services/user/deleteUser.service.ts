import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const deleteUserService = async (userId: string) => {
  const userRepository = AppDataSource.getTreeRepository(User);

  await userRepository.delete({
    id: userId,
  });

  return {};
};

export default deleteUserService;
