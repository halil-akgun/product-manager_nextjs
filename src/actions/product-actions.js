"use server"

import { config } from "@/utils/config";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as Yup from "yup";


const FormSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    category: Yup.string().required("Category is required"),
    price: Yup.number().typeError("Price must be a number").required("Price is required"),
    image: Yup.mixed().required("Image is required"),
})

export const createProductAction = async (formData) => {

    // convert form data to object
    const fields = Object.fromEntries(formData.entries());

    try {

        FormSchema.validateSync(fields, { abortEarly: false });

        const resp = await fetch(`${config.apiURL}/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fields)
        })

        if (!resp.ok) throw new Error("Failed to create product");

    } catch (error) {
        if (error instanceof Yup.ValidationError) {
            console.error(error)
        }
    }

    revalidatePath("/products");
    revalidatePath("/dashboard/products");

    redirect("/dashboard/products");
}