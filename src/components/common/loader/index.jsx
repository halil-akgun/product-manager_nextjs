"use client"
import React from 'react'
import { Spinner } from 'react-bootstrap'

// const Loader = ({ variant = "danger", animation = "border", size = "sm" }) => {
const Loader = (props) => {
    return (
        <div>
            {/* <Spinner animation={animation} size={size} variant={variant} /> */}
            <Spinner animation="border" size="sm" variant="danger" {...props} />
        </div>
    )
}

export default Loader