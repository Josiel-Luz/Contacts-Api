import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { contactListSchema } from "../../schemas/contact.schema";

const listContactService = async (userId: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contacts = await contactRepository.find({
    where: {
      user: {
        id: userId,
      },
    },
  });

  const validatedContacts = contactListSchema.parse(contacts);

  return validatedContacts;
};

export default listContactService;
