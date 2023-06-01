import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import { IContactRequest } from "../../interfaces/contact.interfaces";
import {
  contactRequestschema,
  contactSchema,
} from "../../schemas/contact.schema";

const createContactSevice = async (data: IContactRequest, userId: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const user: any = await userRepository.findOneBy({
    id: userId,
  });

  const newContact = contactRepository.create({
    ...data,
    user: user,
  });
  await contactRepository.save(newContact);

  const validatedReturn = contactSchema.parse(newContact);

  return validatedReturn;
};

export default createContactSevice;
