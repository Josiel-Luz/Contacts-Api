import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { IContactRequest } from "../../interfaces/contact.interfaces";
import {
  contactSchema,
  contactUpdateSchema,
} from "../../schemas/contact.schema";

const updateContactService = async (
  data: IContactRequest,
  contactId: string
) => {
  const contactRepository = AppDataSource.getTreeRepository(Contact);

  const contact = await contactRepository.findOneBy({
    id: contactId,
  });

  const validatedData: any = contactUpdateSchema.parse(data);

  const contactUpdated = contactRepository.create({
    ...contact,
    ...validatedData,
  });
  await contactRepository.save(contactUpdated);

  const validatedContact = contactSchema.parse(contactUpdated);

  return validatedContact;
};

export default updateContactService;
