import mongoose from "mongoose";
import { mongoConnect } from "../../databaseConfig";
import { studentSeed } from "./studentSeed";
import { AppError } from "../classes/AppError";

async function seedDb() {
    try {
        await mongoConnect();
        await studentSeed();
    } catch (error) {
        throw new AppError({ status: 500, message: "Internal Server Error" });
    } finally {
        await mongoose.disconnect();
    }
}

seedDb();