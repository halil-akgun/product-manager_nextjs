"use client"
import React from 'react'
import { Button } from 'react-bootstrap'
import { FaRegTrashAlt } from 'react-icons/fa'

const BtnDeleteProduct = ({ id, title }) => {

    const handleClick = () => {
        const resp = confirm("Are you sure you want to delete this product?\n" + title)
        if (!resp) return
        alert("deleted: " + title)
    }

    return (
        <Button variant="link" onClick={handleClick}>
            <FaRegTrashAlt />
        </Button>
    )
}

export default BtnDeleteProduct