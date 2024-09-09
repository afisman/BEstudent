import { model, Schema } from "mongoose";

interface UserInterface {
    email: string
    password: string
}

const userSchema = new Schema<UserInterface>({
    email: { type: String, required: [true, "Email is required"] },
    password: { type: String, required: [true, "Password is required"] }
});

export const User = model<UserInterface>("user", userSchema);