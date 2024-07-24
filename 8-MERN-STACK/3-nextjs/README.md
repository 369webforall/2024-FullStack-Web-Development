# Nextjs

# Nextjs Video

1. ecommerce

1. [Ecommerce- day 1](https://youtu.be/zF7nlhBDxjk)

1. [Ecommerce- day 2](https://youtu.be/Cptfbvxk5Po)

1. [Ecommerce- day 3](https://youtu.be/-DxmYzUnoto)

## Ecommerce FullStack web application with admin dashboard

(Nextjs 14, tailwindcss, shadcn, prisma, mongodb, auth)

[Logo Design](https://logoipsum.com/)

1. Introduction
2. Installation (nextjs with typescript, shadcn)
3. Pagelayout (header, main, footer)
4. Display product -
5. setup database (mongodb), install prisma ORM, create schema, add data mannualy to your database.
6. load page from database
7. create product detail page

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

### setup mongodb database, create schema

1. prisma schema

```js
//`npx prisma db push`

model Product {
  id          String   @id @default(auto()) @map("_id") @db.ObjectId
  name        String
  slug        String   @unique
  category    String
  images      String[]
  brand       String
  description String
  stock       Int      @default(0)
  price       String
  rating      String
  numReviews  Int      @default(0)
  isFeatured  Boolean  @default(false)
  banner      String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}


```

2. seed products to mongodb.

```js
import prisma from "./client";
import sampleData from "@/lib/sample-data";
async function main() {
  await prisma.product.createMany({
    data: sampleData.products.map((product: any) => ({
      name: product.name,
      slug: product.slug,
      category: product.category,
      images: product.images,
      brand: product.brand,
      description: product.description,
      stock: product.stock,
      price: product.price,
      rating: product.rating,
      numReviews: product.numReviews,
      isFeatured: product.isFeatured ?? false,
      banner: product.banner ?? "",
      createdAt: product.createdAt ? new Date(product.createdAt) : undefined,
      updatedAt: product.updatedAt ? new Date(product.updatedAt) : undefined,
    })),
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

// run command in terminal > npx tsx ./prisma/seed
```

3. load products from database

1. lib/actions/product.action.ts

```js
import prisma from "@/prisma/client";

export async function getLatestProduct() {
  const data = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
  });
  return data;
}
```

2. (root)/page.tsx

```js
import ProductList from "@/components/shared/product/product-list";
import { getLatestProduct } from "@/lib/actions/product.actions";
async function Home() {
  const products = await getLatestProduct();
  return (
    <div>
      <div className="space-y-8">
        <h2 className="h2-bold">Latest Products</h2>
        <ProductList data={products} />
      </div>
    </div>
  );
}

export default Home;
```

### create product details page

1. lib/actions/product.actions.ts

   ```ts
   export async function getProductBySlug(slug: string) {
     return await prisma.product.findFirst({
       where: {
         slug: slug,
       },
     });
   }
   ```

2. npm dlx shadcn-ui@latest add badge

3. components/shared/product/product-images.tsx

   ```ts
   "use client";
   import Image from "next/image";
   import * as React from "react";

   import { cn } from "@/lib/utils";

   export default function ProductImages({ images }: { images: string[] }) {
     const [current, setCurrent] = React.useState(0);

     return (
       <div className="space-y-4">
         <Image
           src={images[current]}
           alt="hero image"
           width={1000}
           height={1000}
           className="min-h-[300px] object-cover object-center "
         />
         <div className="flex">
           {images.map((image, index) => (
             <div
               key={image}
               className={cn(
                 "border   mr-2 cursor-pointer hover:border-orange-600",
                 current === index && "  border-orange-500"
               )}
               onClick={() => setCurrent(index)}
             >
               <Image src={image} alt={"image"} width={100} height={100} />
             </div>
           ))}
         </div>
       </div>
     );
   }
   ```

4. components/shared/product/product-price.tsx

   ```ts
   import { cn } from "@/lib/utils";

   const ProductPrice = ({
     value,
     className,
   }: {
     value: number;
     className?: string;
   }) => {
     const stringValue = value.toString();
     const [intValue, floatValue] = stringValue.includes(".")
       ? stringValue.split(".")
       : [stringValue, ""];
     return (
       <p className={cn("text-2xl", className)}>
         <span className="text-xs align-super">$</span>
         {intValue}
         <span className="text-xs align-super">{floatValue}</span>
       </p>
     );
   };

   export default ProductPrice;
   ```

5. components/shared/product/product-card.tsx

   ```ts
   import ProductPrice from './product-price'
   ...
    <ProductPrice value={Number(product.price)} />
   ```

   ```js
   // - setup constant - lib/constants/index.ts

   export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Amazona";
   export const APP_DESCRIPTION =
     process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
     "An Amazon clone built with Next.js, Postgres, Shadcn";
   ```

6. app/(root)/product/[slug]/page.tsx

   ```ts
   import { notFound } from "next/navigation";

   import ProductImages from "@/components/shared/product/product-images";
   import ProductPrice from "@/components/shared/product/product-price";
   import { Badge } from "@/components/ui/badge";
   import { Card, CardContent } from "@/components/ui/card";
   import { getProductBySlug } from "@/lib/actions/product.actions";
   import { APP_NAME } from "@/lib/constants";
   import { Button } from "@/components/ui/button";

   export async function generateMetadata({
     params,
   }: {
     params: { slug: string };
   }) {
     const product = await getProductBySlug(params.slug);
     if (!product) {
       return { title: "Product not found" };
     }
     return {
       title: `${product.name} - ${APP_NAME}`,
       description: product.description,
     };
   }

   const ProductDetails = async ({
     params: { slug },
   }: {
     params: { slug: string };
     searchParams: { page: string; color: string; size: string };
   }) => {
     const product = await getProductBySlug(slug);
     if (!product) notFound();

     return (
       <>
         <section>
           <div className="grid grid-cols-1 md:grid-cols-5">
             <div className="col-span-2">
               <ProductImages images={product.images!} />
             </div>

             <div className="col-span-2 flex flex-col w-full  gap-8 p-5">
               <div className="flex flex-col gap-6">
                 <p className="p-medium-16 rounded-full bg-grey-500/10   text-grey-500">
                   {product.brand} {product.category}
                 </p>
                 <h1 className="h3-bold">{product.name}</h1>
                 <p>
                   {product.rating} of {product.numReviews} reviews
                 </p>

                 <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                   <div className="flex gap-3">
                     <ProductPrice
                       value={Number(product.price)}
                       className="p-bold-20 rounded-full bg-green-500/10 px-5 py-2 text-green-700"
                     />
                   </div>
                 </div>
               </div>

               <div>
                 <p>Description:</p>
                 <p>{product.description}</p>
               </div>
             </div>
             <div>
               <Card>
                 <CardContent className="p-4">
                   <div className="mb-2 flex justify-between">
                     <div>Price</div>
                     <div>
                       <ProductPrice value={Number(product.price)} />
                     </div>
                   </div>
                   <div className="mb-2 flex justify-between">
                     <div>Status</div>
                     {product.stock > 0 ? (
                       <Badge variant="outline">In stock</Badge>
                     ) : (
                       <Badge variant="destructive">Unavailable</Badge>
                     )}
                   </div>
                   {product.stock !== 0 && (
                     <div className=" flex-center">
                       <Button className="w-full">Add to cart</Button>
                     </div>
                   )}
                 </CardContent>
               </Card>
             </div>
           </div>
         </section>
       </>
     );
   };

   export default ProductDetails;
   ```

```


```
