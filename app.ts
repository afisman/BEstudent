import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { studentController } from "./src/controllers/student";
import { mongoConnect } from "./databaseConfig";

dotenv.config();

export const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoConnect();

app.use("/", studentController);