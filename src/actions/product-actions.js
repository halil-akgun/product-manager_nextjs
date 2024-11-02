"use server"

import { config } from "@/utils/config";
import { revalidatePath } from "next/cache";

export const createProductAction = async (formData) => {

    // convert form data to object
    const fields = Object.fromEntries(formData.entries());

    try {
        const resp = await fetch(`${config.apiURL}/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fields)
        })

        if (!resp.ok) throw new Error("Failed to create product");

    } catch (error) {

    }

    revalidatePath("/products");
}