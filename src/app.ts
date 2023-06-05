import express from "express";
import cors from "cors";
import handleError from "./errors/handleError";
import LoginRouter from "./routes/login.routes";
import ContactRouter from "./routes/contact.routes";
import UserRouter from "./routes/user.routes";
import "reflect-metadata";
import "express-async-errors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/login", LoginRouter);
app.use("/contacts", ContactRouter);
app.use("/users", UserRouter);

app.use(handleError);

export default app;
