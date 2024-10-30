import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer';
import ProductList from '@/components/products/product-list';
import { config } from '@/utils/config';
import React from 'react'

// export const revalidate = 60;
// Ensures that data fetched is removed from the 'data cache' after 60 seconds.

// export const dynamic = 'force-dynamic';
// Disables caching entirely.

export const metadata = {
  title: "Products",
  description: "You can buy anything here",
};

const ProductsPage = async () => {
  // In React, components cannot be asynchronous, but in Next.js, they can be due to the server-side rendering capabilities.

  const res = await fetch(`${config.apiURL}/products`);
  const products = await res.json();

  return (
    <div>
      <PageHeader title="Products" />
      <Spacer height={50} />
      <ProductList products={products} />
      <Spacer height={50} />
    </div>
  )
}

export default ProductsPage