"use client";
import SubmitButton from "@/components/common/form-controls/submit-button";
import { useFormState } from "react-dom";
import { Form } from "react-bootstrap";
import CancelButton from "@/components/common/form-controls/cancel-button";
import { createProductAction } from "@/actions/product-actions";

const NewProductForm = () => {

    return (
        <>
            <Form action={createProductAction}>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        name="title"
                        type="text"
                    />
                    <Form.Control.Feedback type="invalid">
                        {/* {title} */}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        name="description"
                        as="textarea"
                        rows={3}
                    />
                    <Form.Control.Feedback type="invalid">
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        name="price"
                        type="number"
                    />
                    <Form.Control.Feedback type="invalid">
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Select
                        name="category"
                    >
                        <option value="">Select</option>
                        <option value="Home">Home</option>
                        <option value="Computers">Computers</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Kids">Kids</option>
                        <option value="Grocery">Grocery</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        name="image"
                        type="text"
                    />
                    <Form.Control.Feedback type="invalid">
                    </Form.Control.Feedback>
                </Form.Group>

                <SubmitButton title="Create" />
                <CancelButton />
            </Form>
        </>
    );
};

export default NewProductForm
