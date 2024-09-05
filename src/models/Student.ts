import { Schema, model } from "mongoose";

export interface StudentInterface {
    name: string,
    email: string,
    languages: string[]
}

const studentSchema = new Schema<StudentInterface>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    languages: { type: [String], required: true }
})

export const Student = model<StudentInterface>("student", studentSchema);