import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer';
import ProductDetails from '@/components/products/product-details';
import { config } from '@/utils/config';
import React from 'react'

export const metadata = {
    title: {
        absolute: "Free Title",
    },
    description: "You can buy anything here",
};

const ProductDetailsPage = async ({ params }) => {

    const productId = params.id;

    if (!productId || isNaN(productId)) throw new Error('Invalid product ID');

    const res = await fetch(`${config.apiURL}/products/${productId}`);
    const product = await res.json();

    console.log(product);

    return (
        <div>
            <PageHeader title="Product Details" />
            <Spacer height={50} />
            <ProductDetails product={product} />
            <Spacer height={50} />
        </div>
    )
}

export default ProductDetailsPage