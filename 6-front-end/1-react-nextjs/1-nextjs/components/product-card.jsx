import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const ProductCard = ({product}) => {
  
  return (
        <div key={product.id} className='border-2 p-4 w-[240px]'>
<div className='relative '>
              <Image src={product.thumbnail} alt={product.title} className='object-contain' width={200} height={200}/>
            </div>
            
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h1>{product.id}</h1>
          <Link href={`/products/${product.id}`} className='bg-purple-400 px-4 py-2 rounded-lg '>Poduct Details</Link>
            </div>
  )
}

export default ProductCard