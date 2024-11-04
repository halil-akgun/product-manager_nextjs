"use server"

import { config } from "@/utils/config";
import { convertFormDataToObject, getYupErrors } from "@/utils/form-validation";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as Yup from "yup";


const FormSchema = Yup.object({
    id: Yup.string().required("ID is required"),
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    category: Yup.string().required("Category is required"),
    price: Yup.number().typeError("Price must be a number").required("Price is required"),
    image: Yup.string().required("Image is required"),
})

const CreateSchema = FormSchema.omit(["id"]);

export const createProductAction = async (prevState, formData) => {

    // convert form data to object
    const fields = convertFormDataToObject(formData);

    try {

        CreateSchema.validateSync(fields, { abortEarly: false });

        const resp = await fetch(`${config.apiURL}/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fields)
        })

        if (!resp.ok) {
            const data = await resp.json();
            throw new Error(data.message || "Something went wrong!");
        };

    } catch (error) {
        console.log(error);
        if (error instanceof Yup.ValidationError) {
            return getYupErrors(error.inner);
        }
        return {
            message: "Something went wrong!",
            errors: {
                common: error.message
            }
        }
    }

    // clear cache
    revalidatePath("/products");
    revalidatePath("/dashboard/products");

    redirect("/dashboard/products");
}

export const updateProductAction = async (prevState, formData) => {
    const fields = convertFormDataToObject(formData);

    try {
        FormSchema.validateSync(fields, { abortEarly: false });

        const resp = await fetch(`${config.apiURL}/products/${fields.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fields)
        })

        if (!resp.ok) {
            const data = await resp.json();
            throw new Error(data.message || "Something went wrong!");
        };

    } catch (error) {
        console.log(error);
        if (error instanceof Yup.ValidationError) {
            return getYupErrors(error.inner);
        }
        return {
            message: "Something went wrong!",
            errors: {
                common: error.message
            }
        }
    }

    // clear cache
    revalidatePath("/products");
    revalidatePath(`/products/${fields.id}`);
    revalidatePath("/dashboard/products");
    revalidatePath(`/dashboard/products/${fields.id}`);

    redirect("/dashboard/products");
}

export const deleteProductAction = async (id) => {

    try {
        if (!id) {
            throw new Error("ID is missing");
        }

        const resp = await fetch(`${config.apiURL}/products/${id}`, {
            method: "DELETE",
        })

        if (!resp.ok) {
            const data = await resp.json();
            throw new Error(data.message || "Something went wrong!");
        };
    } catch (error) {
        console.log(error);
        if (error instanceof Yup.ValidationError) {
            return getYupErrors(error.inner);
        }
        return {
            message: "Something went wrong!",
            errors: {
                common: error.message
            }
        }
    }

    // clear cache
    revalidatePath("/products");
    revalidatePath(`/products/${fields.id}`);
    revalidatePath("/dashboard/products");
    revalidatePath(`/dashboard/products/${fields.id}`);

    redirect("/dashboard/products");
}