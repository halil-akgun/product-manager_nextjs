import PageHeader from '@/components/common/page-header'
import React from 'react'

const ProductDetails = ({ params }) => {
    return (
        <div>
            <PageHeader title="Product Details" />
            ProductDetails {params.id}
        </div>
    )
}

export default ProductDetails