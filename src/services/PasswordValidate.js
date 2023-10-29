import { compare } from "bcryptjs"

export const validatePassword = async (password, hashedPassword) => {
    try {
        const isValid = await compare(password, hashedPassword);
        return isValid;
    } catch (error) {
        console.log("error", error);
    }
}