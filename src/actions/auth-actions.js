"use server"
import { signIn } from "@/auth"
import { AuthError } from "next-auth"
import * as Yup from "yup"

const FormSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
})


export const signInWithCredentials = async (prevState, formData) => {
    const fields = {
        username: formData.get("username"),
        password: formData.get("password"),
    }
    // alternative:
    // const fields = Object.fromEntries(formData.entries());

    try {
        FormSchema.validateSync(fields, { abortEarly: false });
        await signIn("credentials", fields)
    } catch (error) {
        console.error(error);

        if (error instanceof Yup.ValidationError) {
            return getYupErrors(error.inner);
        } else if (error instanceof AuthError) {
            return {
                message: "Authentication failed",
            }
        } else {
            throw error
        }
    }
}

export const signInWithSocial = async (formData) => {

    const providerName = formData.get("provider")

    try {
        await signIn(providerName)
    } catch (error) {
        console.error(error)
        if (error instanceof AuthError) {
            return {
                message: "Authentication failed",
            }
        } else {
            throw error
        }
    }
}