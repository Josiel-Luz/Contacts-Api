import { date } from "yup";

interface IContactRequest {
  name: string;
  email: string;
  phone: number;
}

interface IContact {
  id: string;
  name: string;
  email: string;
  phone: number;
  created_at: Date;
}

export { IContact, IContactRequest };
