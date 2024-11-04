"use client"
import { deleteProductAction } from '@/actions/product-actions'
import React from 'react'
import { Button } from 'react-bootstrap'
import { FaRegTrashAlt } from 'react-icons/fa'

const BtnDeleteProduct = ({ id, title }) => {

    const handleClick = async () => {
        const answer = confirm("Are you sure you want to delete this product?\n" + title)
        if (!answer) return

        try {
            const resp = await deleteProductAction(id)
            if (resp.errors.common) alert(resp.errors.common)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Button variant="link" onClick={handleClick}>
            <FaRegTrashAlt />
        </Button>
    )
}

export default BtnDeleteProduct