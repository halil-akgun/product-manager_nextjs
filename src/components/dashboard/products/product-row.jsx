import React from 'react'

const ProductRow = ({ products }) => {

    const { id, title, category, price } = products;

    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td></td>
        </tr>
    )
}

export default ProductRow