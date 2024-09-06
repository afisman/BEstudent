import express, { Express, Request, Response } from "express";
import { studentController } from "./src/controllers/student";
import { mongoConnect } from "./databaseConfig";

export const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoConnect();

app.use("/", studentController);