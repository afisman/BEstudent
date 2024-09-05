import express, { Request, Response } from "express";
import { createStudent, deleteStudent, editStudent, fetchSingleStudent, fetchAllStudents } from "../services/student";

export const studentController = express.Router();

studentController.get("/", async (_req: Request, res: Response) => {
    console.log("en el controller")
    try {
        const students = await fetchAllStudents();
        res.json(students);
    } catch (error) {
        console.log(error);
    }
});

studentController.get("/:id", async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const student = await fetchSingleStudent(id);
        res.json(student);
    } catch (error) {
        console.log(error);
    }
});

studentController.post("/", async (req: Request, res: Response) => {
    try {
        const newStudent = await createStudent(req.body);
        res.json(newStudent);
    } catch (error) {
        console.log(error);
    }
});

studentController.put("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const editedStudent = await editStudent(id, req.body);
        res.json(editedStudent);
    } catch (error) {
        console.log(error);
    }
});

studentController.delete("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedStudent = await deleteStudent(id);
        res.json(deletedStudent);
    } catch (error) {
        console.log(error);
    }
});