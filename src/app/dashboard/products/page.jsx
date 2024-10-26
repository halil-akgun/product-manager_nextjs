import ProductList from '@/components/dashboard/products/product-list';
import { config } from '@/utils/config';
import React from 'react'

const DashboardProductsPage = async () => {

  const res = await fetch(`${config.apiURL}/products`);
  const products = await res.json();

  return (
    <div>
      <ProductList products={products} />
    </div>
  )
}

export default DashboardProductsPage