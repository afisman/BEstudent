import { AppError } from "../classes/AppError";
import { Student, StudentInterface } from "../models/Student";

export const fetchAllStudents = async (): Promise<StudentInterface[]> => {
    const students = await Student.find();
    if (!students) {
        throw new AppError({ status: 404, message: "Students not found" });
    }

    return students;
}

export const fetchSingleStudent = async (id: any): Promise<StudentInterface> => {
    const student = await Student.findById(id);
    if (!student) {
        throw new AppError({ status: 404, message: "Student not found" });
    }
    return student;
}

export const createStudent = async (data: StudentInterface): Promise<StudentInterface> => {
    const newStudent = await Student.create(data);
    if (!newStudent) {
        throw new AppError({ status: 400, message: "Error while creating student" });
    }
    return newStudent;
}

export const editStudent = async (id: any, data: StudentInterface): Promise<StudentInterface | null> => {
    const editedStudent = await Student.findByIdAndUpdate(id, data, { new: true });
    if (!editedStudent) {
        throw new AppError({ status: 400, message: "Error while creating student" });
    }

    return editedStudent;
}

export const deleteStudent = async (id: any): Promise<StudentInterface | null> => {
    const student = await Student.findByIdAndDelete(id);
    if (!student) {
        throw new AppError({ status: 400, message: "Error while creating student" });
    }

    return student;
}