import { Student, StudentInterface } from "../models/Student";

export const fetchAllStudents = async (): Promise<StudentInterface[]> => {
    const students = await Student.find();
    if (students === null) {
        throw new Error("Error while fetching students");
    }

    return students;
}

export const fetchSingleStudent = async (id: any): Promise<StudentInterface> => {
    const student = await Student.findById(id);
    if (!student) {
        throw new Error("Error while fetching student");
    }
    return student;
}