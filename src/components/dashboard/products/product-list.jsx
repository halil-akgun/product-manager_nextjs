import React from 'react'
import ProductRow from './product-row'
import { Table } from 'react-bootstrap'

const ProductList = ({ products }) => {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <ProductRow key={product.id} products={product} />
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default ProductList