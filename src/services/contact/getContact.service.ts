import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { contactSchema } from "../../schemas/contact.schema";

const getContactService = async (contactId: string) => {
  const contactRepository = AppDataSource.getTreeRepository(Contact);

  const contact = await contactRepository.findOneBy({
    id: contactId,
  });

  const validateContact = contactSchema.parse(contact);

  return validateContact;
};

export default getContactService;
