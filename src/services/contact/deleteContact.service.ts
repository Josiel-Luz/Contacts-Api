import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";

const deleteContactService = async (contactId: string) => {
  const contactRepository = AppDataSource.getTreeRepository(Contact);

  await contactRepository.delete({
    id: contactId,
  });

  return {};
};

export default deleteContactService;
