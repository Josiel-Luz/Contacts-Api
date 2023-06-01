import { Router } from "express";
import verifySchemaMiddleware from "../middlewares/verifySchema.middleware";
import {
  contactRequestschema,
  contactUpdateSchema,
} from "../schemas/contact.schema";
import verifyTokenMidddleware from "../middlewares/verifyToken.middleware";
import {
  creteContactController,
  listContactController,
  getContactController,
  updateContactController,
  deleteContactController,
} from "../controllers/contact.controller";
import verifyIfContactExistsMiddleware from "../middlewares/verifyContactExists.middleware";
import verifyIsContactOwnerMiddleware from "../middlewares/verifyIsContactOwner.middleware";

const ContactRouter = Router();

ContactRouter.post(
  "",
  verifySchemaMiddleware(contactRequestschema),
  verifyTokenMidddleware,
  creteContactController
);
ContactRouter.get("", verifyTokenMidddleware, listContactController);
ContactRouter.get(
  "/:id",
  verifyTokenMidddleware,
  verifyIfContactExistsMiddleware,
  verifyIsContactOwnerMiddleware,
  getContactController
);
ContactRouter.patch(
  "/:id",
  verifySchemaMiddleware(contactUpdateSchema),
  verifyTokenMidddleware,
  verifyIfContactExistsMiddleware,
  verifyIsContactOwnerMiddleware,
  updateContactController
);
ContactRouter.delete(
  "/:id",
  verifyTokenMidddleware,
  verifyIfContactExistsMiddleware,
  verifyIsContactOwnerMiddleware,
  deleteContactController
);

export default ContactRouter;
