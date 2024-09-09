import { faker } from "@faker-js/faker";
import { Student } from "../models/Student";

export const studentSeed = async () => {
    try {
        await Student.collection.drop();

        const languagesList = ["Java", "Python", "C", "JavaScript", "Go", "Solidity"];

        for (let i = 0; i < 20; i++) {
            const document = new Student({
                name: faker.person.fullName(),
                email: faker.internet.email(),
                languages: faker.helpers.arrayElements(languagesList, { min: 1, max: languagesList.length })
            })

            console.log(document);
            await document.save();
        }

    } catch (error) {
        console.log(error);
    }
}