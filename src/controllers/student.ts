import express, { Request, Response, NextFunction } from "express";
import { createStudent, deleteStudent, editStudent, fetchSingleStudent, fetchAllStudents } from "../services/student";

export const studentController = express.Router();


studentController.get("/", async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const students = await fetchAllStudents();
        res.json(students);
    } catch (error) {
        next(error);
    }
});

studentController.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    try {
        const student = await fetchSingleStudent(id);
        res.json(student);
    } catch (error) {
        next(error);
    }
});

studentController.post("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newStudent = await createStudent(req.body);
        res.json(newStudent);
    } catch (error) {
        next(error);
    }
});

studentController.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const editedStudent = await editStudent(id, req.body);
        res.json(editedStudent);
    } catch (error) {
        next(error);
    }
});

studentController.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const deletedStudent = await deleteStudent(id);
        res.json(deletedStudent);
    } catch (error) {
        next(error);
    }
});