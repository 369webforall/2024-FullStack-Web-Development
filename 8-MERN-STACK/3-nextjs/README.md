# Nextjs

# Nextjs Video

1. ecommerce

1. [Ecommerce- day 1](https://youtu.be/zF7nlhBDxjk)

1. [Ecommerce- day 2](https://youtu.be/Cptfbvxk5Po)

## Ecommerce FullStack web application with admin dashboard

(Nextjs 14, tailwindcss, shadcn, prisma, mongodb, auth)

[Logo Design](https://logoipsum.com/)

1. Introduction
2. Installation (nextjs with typescript, shadcn)
3. Pagelayout (header, main, footer)
4. Display product -

### Display products

- Add some sample images to public/assets/images
- Add sample data - lib/sample-data.ts
- Adding card from shadcn
- now create product-card page - in components/shared/product/product-card.tsx
- create product-list.tsx page - components/shared/product/product-list.tsx

````js
// list products

(1).eslintrc.json```js
      {
        "extends": "next/core-web-vitals"
        "extends": ["eslint:recommended", "next/core-web-vitals"]
      }`;
````

2. copy sample product images to public/assets/images folder

3. lib/sample-data.ts

   ```ts
   const sampleData = {
     products: [
       {
         name: "LOOSE FIT PIQUE JOGGER SWEATSHIRT",
         slug: "loose-fit-pique-jogger-sweatshirt",
         category: "Men's Sweatshirts",
         images: ["/assets/images/p1-1.jpeg", "/assets/images/p1-2.jpeg"],
         price: "59.99",
         brand: "Nike",
         rating: "4.5",
         numReviews: 10,
         stock: 5,
         description:
           "Lacoste sporting elegance with an urban twist. Fall in love with this loose, cozy sweatshirt in super-comfortable double-face piqué.",
         isFeatured: true,
         banner: "/assets/images/banner-1.jpeg",
       },
       {
         name: "LACOSTE TENNIS X NOVAK DJOKOVIC SPORTSUIT JACKET",
         slug: "lacoste-tennis-x-novak-djokovic-sportsuit-jacket",
         category: "Men's Sweatshirts",
         images: ["/assets/images/p2-1.jpeg", "/assets/images/p2-2.jpeg"],
         price: "199.90",
         brand: "Lacoste",
         rating: "4.2",
         numReviews: 8,
         stock: 10,
         description:
           "Hit the courts like Novak Djokovic with this seamless stretch jacket, made to move your way.",
         isFeatured: true,
         banner: "/assets/images/banner-2.jpeg",
       },
       {
         name: "SHOWERPROOF SPORTSUIT TRACK PANTS",
         slug: "showerproof-sportsuit-track-pants",
         category: "Track Pants",
         images: ["/assets/images/p3-1.jpeg", "/assets/images/p3-2.jpeg"],
         price: "149.95",
         brand: "Nike",
         rating: "4.9",
         numReviews: 3,
         stock: 0,
         description:
           "Stay stylish, whatever the weather. These showerproof track pants are here to protect you from the rain. ",
       },
       {
         name: "MEN'S LACOSTE SPORT FRENCH CAPSULE TRACKSUIT PANTS",
         slug: "mens-lacoste-sport-french-capsule-tracksuit-pants",
         category: "Track Pants",
         images: ["/assets/images/p4-1.jpeg", "/assets/images/p4-2.jpeg"],
         price: "125.95",
         brand: "Lacoste",
         rating: "3.6",
         numReviews: 5,
         stock: 10,
         description:
           "A tricolour design brings a distinctive edge to these lightweight tracksuit pants made of diamond taffeta. ",
       },
       {
         name: "Men&#39;s Casual Polo Shirts Classic Button Basic Short Sleeve Shirt.",
         slug: "polo shirt classic button",
         category: "Polo Shirts",
         images: ["/assets/images/p5-1.jpeg", "/assets/images/p5-2.jpeg"],
         price: "26",
         brand: "Polo",
         rating: "4.0",
         numReviews: 10,
         stock: 20,
         description:
           "Men&#39;s Casual Polo Shirts Classic Button Basic Short Sleeve Shirt Solid Color Cotton Tees Golf Stylish Tops,  Cotton and polyester ",
       },
     ],
   };
   export default sampleData;
   ```

4. npm dlx shadcn-ui@latest add card

5. components/shared/product/product-card.tsx

   ```ts
   import Image from "next/image";
   import Link from "next/link";
   import React from "react";
   import { Card, CardContent, CardHeader } from "@/components/ui/card";
   const ProductCard = ({ product }: { product: any }) => {
     return (
       <Card className="w-full max-w-sm">
         <CardHeader className="p-0 items-center">
           <Link href={`/product/${product.slug}`}>
             <Image
               alt={product.name}
               className="aspect-square object-cover rounded"
               height={300}
               src={product.images![0]}
               width={300}
             />
           </Link>
         </CardHeader>
         <CardContent className="p-4 grid gap-4">
           <div className="grid gap-1.5 text-sm leading-4">
             <p className="text-xs leading-3">{product.brand}</p>
           </div>
           <div className="grid gap-1.5 text-sm leading-4">
             <Link href={`/product/${product.slug}`}>
               <h2 className="text-sm font-medium">{product.name}</h2>
             </Link>
           </div>
           <div className="flex-between gap-4">
             <p>{product.rating} stars</p>
             {product.stock > 0 ? (
               <p className="font-bold">${product.price}</p>
             ) : (
               <p className="text-destructive">Out of Stock</p>
             )}
           </div>
         </CardContent>
       </Card>
     );
   };
   export default ProductCard;
   ```

6. components/shared/product/product-list.tsx

   ```ts
   import React from "react";
   import ProductCard from "./product-card";
   const ProductList = ({ data }: { data: any }) => {
     return (
       <>
         {data.length > 0 ? (
           <div>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
               {data.map((product: any) => (
                 <ProductCard key={product.slug} product={product} />
               ))}
             </div>
           </div>
         ) : (
           <div>
             <p>No product found</p>
           </div>
         )}
       </>
     );
   };
   export default ProductList;
   ```

7. app/(root)/page.tsx

   ```ts
   import ProductList from "@/components/shared/product/product-list";
   import sampleData from "@/lib/sample-data";
   export default function Home() {
     return (
       <div className="space-y-8">
         <h2 className="h2-bold">Latest Products</h2>
         <ProductList data={sampleData.products} />
       </div>
     );
   }
   ```

### check for error, `npm run build`

- fix all the error and run command again.

- now deploy to vercel
