import React from 'react'
import ProductCard from "../../components/product-card";
const ProductPage = async() => {
    const res = await fetch("https://dummyjson.com/products");

   const {products} = await res.json();



  return (
    <div className='flex gap-4 flex-wrap'>
        {products.map((product)=>(
           <ProductCard product={product} />
        ))}
    </div>
  )
}

export default ProductPage