import { Request, Response } from "express";
import { IContactRequest } from "../interfaces/contact.interfaces";
import createContactSevice from "../services/contact/createContact.service";
import listContactService from "../services/contact/listContact.service";
import getContactService from "../services/contact/getContact.service";
import updateContactService from "../services/contact/updateContact.service";
import deleteContactService from "../services/contact/deleteContact.service";

const creteContactController = async (req: Request, res: Response) => {
  const data: IContactRequest = req.body;
  const id: string = req.user.id;

  const response = await createContactSevice(data, id);

  return res.status(201).json(response);
};

const listContactController = async (req: Request, res: Response) => {
  const id: string = req.user.id;

  const response = await listContactService(id);

  return res.json(response);
};

const getContactController = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const response = await getContactService(id);

  return res.json(response);
};

const updateContactController = async (req: Request, res: Response) => {
  const data: IContactRequest = req.body;
  const id: string = req.params.id;

  const response = await updateContactService(data, id);

  return res.json(response);
};

const deleteContactController = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const response = await deleteContactService(id);

  return res.status(204).json(response);
};

export {
  creteContactController,
  listContactController,
  getContactController,
  updateContactController,
  deleteContactController,
};
