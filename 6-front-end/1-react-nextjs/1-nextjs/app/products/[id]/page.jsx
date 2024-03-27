import React from 'react'

import ProductCard from '../../../components/product-card';

const ProductDetailsPage = async({params}) => {
    const res = await fetch(`https://dummyjson.com/products/${params.id}`)

  const product = await res.json();
  console.log(product)
  return (
    <>
    <ProductCard product={product} />
    <p>Price$:{product.price}</p>
    <p>Brand: {product.brand}</p>
    <p>Category: {product.category}</p>
    </>
  )
}

export default ProductDetailsPage