import { z } from "zod";

const contactRequestschema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.number(),
});

const contactSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.number(),
  created_at: z.string(),
});

const contactListSchema = z.array(contactSchema);

export { contactRequestschema, contactSchema, contactListSchema };
