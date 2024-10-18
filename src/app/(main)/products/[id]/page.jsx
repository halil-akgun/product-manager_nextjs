import PageHeader from '@/components/common/page-header'
import React from 'react'

export const metadata = {
    title: {
        absolute: "Free Title",
    },
    description: "You can buy anything here",
};

const ProductDetails = ({ params }) => {
    return (
        <div>
            <PageHeader title="Product Details" />
            ProductDetails {params.id}
        </div>
    )
}

export default ProductDetails