# Nextjs

# Nextjs Video

1. [Ecommerce- day 1](https://youtu.be/zF7nlhBDxjk)

2. [Ecommerce- day 2](https://youtu.be/Cptfbvxk5Po)

3. [Ecommerce- day 3](https://youtu.be/-DxmYzUnoto)

4. [Ecommerce- day 3-part2](https://youtu.be/qOj-rR6MP8o)

5. [Ecommerce- day 4- Auth](https://youtu.be/b_o3Rf99ats)

6. [Ecommerce- day 5- Next-Auth Credentials](https://youtu.be/mc3Bnevr0kc)

7. [Ecommerce- day 6-shopping cart](https://youtu.be/wFbL9ZS4QF4)

8. [Ecommerce- day 7-shopping cart](https://youtu.be/UCRx9lhOqHM)

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

### Add auth to project

1. Install all the packages and library required for next-auth

`npm install @prisma/client @auth/prisma-adapter @auth/mongodb-adapter`

`npm i bcryptjs @types/bcryptjs`

`npm install next-auth@beta`

`npx auth secret`

2. .env

```js
AUTH_SECRET=
```

3. add schema to prisma.schema file

4. create signup form (shadcn form)

- (auth)/sign-in>sing-in.tsx

```js
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signUp } from "./auth.action";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const formRegisterSchema = z
  .object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().email().min(3, {
      message: "Email is required.",
    }),
    password: z.string().min(3, {
      message: "Password is required",
    }),
    confirmPassword: z.string().min(3, {
      message: "Confirm Password is required",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export function Register() {
  // 1. Define your form.
  const form =
    useForm <
    z.infer <
    typeof formRegisterSchema >>
      {
        resolver: zodResolver(formRegisterSchema),
        defaultValues: {
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
      };
  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formRegisterSchema>) {
    const res = await signUp(values);
    if (res.success) {
      toast.success("Account created successfully");
      router.push("/");
    } else {
      toast.error(res.error);
    }
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your FullName...." {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email..."
                  {...field}
                  type="email"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your password..."
                  {...field}
                  type="password"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Confirm Password..."
                  {...field}
                  type="password"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Register</Button>
      </form>
    </Form>
  );
}
```

- register the user with server action.

auth.action.ts

```js
"use server";
import prisma from "@/prisma/client";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { formRegisterSchema } from "./signup-form";

export const signUp = async (values: z.infer<typeof formRegisterSchema>) => {
  try {
    // if user already exists, throw an error
    const existingUser = await prisma.user.findUnique({
      where: {
        email: values.email,
      },
    });
    if (existingUser) {
      return { error: "User already exists", success: false };
    }

    // Utility function to generate student ID

    const hashedPassword = bcrypt.hashSync(values.password, 10);

    const user = await prisma.user.create({
      data: {
        name: values.name,
        email: values.email,
        password: hashedPassword,
      },
    });

    return { message: "Account created successfully", success: true };
  } catch (error) {
    console.error("Error during sign up:", error);
    return { error: "Something went wrong", success: false };
  }
};
```

- steup toast from shadcn to display message.

- Login form, loginpage, login-action

- - (auth)/sign-in>page.tsx

```js
import React from "react";
import { SignIn } from "./singin";

const LoginPage = () => {
  return (
    <div className="max-w-sm">
      <SignIn />
    </div>
  );
};

export default LoginPage;
```

```js
//login-action
"use server";
import { formSignInSchema } from "./singin-form";
import { z } from "zod";
import prisma from "@/prisma/client";
import bcrypt from "bcryptjs";
export const signIn = async (values: z.infer<typeof formSignInSchema>) => {
  const user = await prisma.user.findUnique({
    where: {
      email: values.email,
    },
  });
  if (!user || !user.confirmPassword) {
    return { success: false, error: "Invalid Credentials!" };
  }
  const passwordMatch = bcrypt.compareSync(
    values.password,
    user.confirmPassword
  );
  if (!passwordMatch) {
    return { success: false, error: "Invalid Credentials!" };
  }
  // successfully login

  console.log("login success");
};
```

### implement add to cart

- finalize the types of data and create validation for it.
- Format the price
- create schema for your cart
- idea is to create session id in user cookies when someone visits the website and add the poducts to database cart table if user click on add to cart button.
- will track the session id and compare to our database cart, so that visitor can see the shopping cart even when he visits next time.

1. lib/validator.ts

```ts
// CART
import { z } from "zod";
import { formatNumberWithDecimal } from "../utils";

export const cartItemSchema = z.object({
  productId: z.string().min(1, "Product is required"),
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1, "Slug is required"),
  qty: z.number().int().nonnegative("Quantity must be a non-negative number"),
  image: z.string().min(1, "Image is required"),
  price: z
    .number()
    .refine(
      (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(value)),
      "Price must have exactly two decimal places (e.g., 49.99)"
    ),
});
```

1.a lib/utils.ts

```js
export const formatNumberWithDecimal = (num: number): string => {
  const [int, decimal] = num.toString().split(".");
  return decimal ? `${int}.${decimal.padEnd(2, "0")}` : int; //12.1 => 12.10
};
```

1.b lib/types/index.ts

```js
import { cartItemSchema } from "../schema/validator";
import { z } from "zod";

//CART

export type CartItem = z.infer<typeof cartItemSchema>;
```

2. create schema for cart table.
   prisma/prisma.schema

   npx prisma db push

```js
model Cart {
  id            String   @id @default(auto()) @map("_id") @db.ObjectId
  userId        String?   @db.ObjectId
  sessionCartId String
  items         Json     @default("[]")
  itemsPrice    Float
  shippingPrice Float
  taxPrice      Float
  totalPrice    Float
  createdAt     DateTime @default(now())
  user          User?     @relation(fields: [userId], references: [id])

  @@unique([userId])
  @@map("cart")
}
```

3. Now main logic to add cart, update auth.ts

```js
 async jwt({ token, user, session, trigger }: any) {
      if (user) {
        if (trigger === "signIn" || trigger === "signUp") {
          const sessionCartId = cookies().get("sessionCartId")?.value;
          if (!sessionCartId) throw new Error("Session cart not Found");

          const sessionCartExists = await prisma.cart.findFirst({
            where: {
              sessionCartId: sessionCartId,
            },
          });

          if (sessionCartExists && !sessionCartExists.userId) {
            const userCartExists = await prisma.cart.findFirst({
              where: {
                userId: user.id,
              },
            });
            if (userCartExists) {
              cookies().set("beforeSigninSessionCartId", sessionCartId);
              cookies().set("sessionCartId", userCartExists.sessionCartId);
            } else {
              await prisma.cart.update({
                where: { id: sessionCartExists.id },
                data: { userId: user.id },
              });
            }
          }
        }
      }
      return token;
    },

// to keep session updated

      session: async ({ session, user, trigger, token }: any) => {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (trigger === "update") {
        session.user.name = user.name;
      }
      return session;
    },

    //authorized function will always run in any route

  authorized({ request, auth }: any) {
      const protectedPaths = [
        /\/shipping-address/,
        /\/payment-method/,
        /\/place-order/,
        /\/profile/,
        /\/user\/(.*)/,
        /\/order\/(.*)/,
        /\/admin/,
      ];
      const { pathname } = request.nextUrl;
      if (!auth && protectedPaths.some((p) => p.test(pathname))) return false;

      const sessionCartId = request.cookies.get("sessionCartId");
      if (!sessionCartId) {
        const newSessionCartId = crypto.randomUUID();
        const newRequestHeaders = new Headers(request.headers);
        const response = NextResponse.next({
          request: {
            headers: newRequestHeaders,
          },
        });
        response.cookies.set("sessionCartId", newSessionCartId);
        return response;
      } else {
        return true;
      }
    },

```

4. lib/utils.ts

```js
export const round2 = (value: number | string) => {
  if (typeof value === "number") {
    return Math.round((value + Number.EPSILON) * 100) / 100; // avoid rounding errors
  } else if (typeof value === "string") {
    return Math.round((Number(value) + Number.EPSILON) * 100) / 100;
  } else {
    throw new Error("value is not a number nor a string");
  }
};
```

5. lib/actions/cart.actions.ts

a. first function getMyCart()

```ts
"use server";

export async function getMyCart() {
  const sessionCartId = cookies().get("sessionCartId")?.value;
  const session = await auth();
  const userId = session?.user?.id as string | undefined;

  if (!sessionCartId) return null;

  const cart = await prisma.cart.findFirst({
    where: {
      OR: [{ userId }, { sessionCartId }],
    },
  });

  if (!cart) return null;

  return {
    ...cart,
    items: cart.items as CartItem[], // Type assertion to specify items as CartItem[]
  };
}
```

b.

- let's use this function in header section to display the total item qty.

- components/header/cart-button.tsx

```js
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getMyCart } from "@/lib/actions/cart.actions";
import { Cart } from "@prisma/client";
import { CartItem } from "@/lib/types";

type CartArray = Omit<Cart, "items"> & {
  items: CartItem[];
};

export default async function CartButton() {
  const cart = ((await getMyCart()) as CartArray) || null;

  return (
    <Button asChild variant="ghost">
      <Link href="/cart">
        <ShoppingCart className="mr-1" />
        Cart
        {cart && cart.items.length > 0 && (
          <Badge className="ml-1">
            {cart.items.reduce((a, c) => a + c.qty, 0)}
          </Badge>
        )}
      </Link>
    </Button>
  );
}

```

c. define calculate price function
lib/actions/cart.actions.ts

```js
const calcPrice = (items: CartItem[]) => {
  const itemsPrice = round2(
      items.reduce((acc, item) => acc + item.price * item.qty, 0)
    ),
    shippingPrice = round2(itemsPrice > 100 ? 0 : 10),
    taxPrice = round2(0.15 * itemsPrice),
    totalPrice = round2(itemsPrice + shippingPrice + taxPrice);
  return {
    itemsPrice: Number(itemsPrice.toFixed(2)),
    shippingPrice: Number(shippingPrice.toFixed(2)),
    taxPrice: Number(taxPrice.toFixed(2)),
    totalPrice: Number(totalPrice.toFixed(2)),
  };
};
```

- time to implement addToCartItem function
  lib/actions/cart.actions.ts

```js
export const addItemToCart = async (data: CartItem) => {
  try {
    let sessionCartId = cookies().get("sessionCartId")?.value;

    if (!sessionCartId) throw new Error("Cart Session not found");

    const session = await auth();
    const userId = session?.user?.id as string | undefined;

    const cart = await getMyCart();
    const item = cartItemSchema.parse(data);

    const product = await prisma.product.findUnique({
      where: { id: item.productId },
    });
    if (!product) throw new Error("Product not found");

    if (!cart) {
      if (product.stock < 1) throw new Error("Not enough stock");

      const prices = calcPrice([item]);

      const cartData: any = {
        sessionCartId,
        items: [item],
        ...prices,
      };

      if (userId) {
        cartData.userId = userId;
      }

      await prisma.cart.create({
        data: cartData,
      });

      revalidatePath(`/product/${product.slug}`);
      return {
        success: true,
        message: "Item added to cart successfully",
      };
    } else {
      const existItem = cart.items.find((x) => x.productId === item.productId);
      if (existItem) {
        if (product.stock < existItem.qty + 1)
          throw new Error("Not enough stock");
        existItem.qty += 1;
      } else {
        if (product.stock < 1) throw new Error("Not enough stock");
        cart.items.push(item);
      }

      const prices = calcPrice(cart.items);

      await prisma.cart.update({
        where: { id: cart.id },
        data: {
          items: cart.items,
          ...prices,
        },
      });

      revalidatePath(`/product/${product.slug}`);
      return {
        success: true,
        message: `${product.name} ${
          existItem ? "updated in" : "added to"
        } cart successfully`,
      };
    }
  } catch (error: any) {
    return { success: false, message: formatError(error) };
  }
};

```

// complete code for lib/actions/cart.actions.ts

```js
"use server";
import { cookies } from "next/headers";
import { auth } from "@/auth";
import prisma from "@/prisma/client";
import { CartItem } from "../types";
import { cartItemSchema } from "../schema/validator";
import { revalidatePath } from "next/cache";
import { formatError } from "../utils";
import { round2 } from "../utils";

const calcPrice = (items: CartItem[]) => {
  const itemsPrice = round2(
      items.reduce((acc, item) => acc + item.price * item.qty, 0)
    ),
    shippingPrice = round2(itemsPrice > 100 ? 0 : 10),
    taxPrice = round2(0.15 * itemsPrice),
    totalPrice = round2(itemsPrice + shippingPrice + taxPrice);
  return {
    itemsPrice: Number(itemsPrice.toFixed(2)),
    shippingPrice: Number(shippingPrice.toFixed(2)),
    taxPrice: Number(taxPrice.toFixed(2)),
    totalPrice: Number(totalPrice.toFixed(2)),
  };
};
export async function getMyCart() {
  const sessionCartId = cookies().get("sessionCartId")?.value;
  const session = await auth();
  const userId = session?.user?.id as string | undefined;

  if (!sessionCartId) return null;

  const cart = await prisma.cart.findFirst({
    where: {
      OR: [{ userId }, { sessionCartId }],
    },
  });
  console.log(cart);
  if (!cart) return null;

  return {
    ...cart,
    items: cart.items as CartItem[], // Type assertion to specify items as CartItem[]
  };
}

export const addItemToCart = async (data: CartItem) => {
  try {
    let sessionCartId = cookies().get("sessionCartId")?.value;

    if (!sessionCartId) throw new Error("Cart Session not found");
    const session = await auth();
    const userId = session?.user?.id as string | undefined;

    const cart = await getMyCart();
    const item = cartItemSchema.parse(data);

    const product = await prisma.product.findFirst({
      where: { id: item.productId },
    });

    if (!product) throw new Error("Product not found");

    if (!cart) {
      if (product.stock < 1) throw new Error("Not enough stock");

      const prices = calcPrice([item]);

      const cartData: any = {
        sessionCartId,
        items: [item],
        ...prices,
      };
      if (userId) {
        cartData.userId = userId;
      }

      try {
        await prisma.cart.create({
          data: cartData,
        });

        revalidatePath(`/product/${product.slug}`);
        return {
          success: true,
          message: "Item added to cart successfully",
        };
      } catch (error) {
        console.log(error);
      }
    } else {
      const existItem = cart.items.find((x) => x.productId === item.productId);
      if (existItem) {
        if (product.stock < existItem.qty + 1)
          throw new Error("Not enough stock");
        existItem.qty += 1;
      } else {
        if (product.stock < 1) throw new Error("Not enough stock");
        cart.items.push(item);
      }

      const prices = calcPrice(cart.items);

      await prisma.cart.update({
        where: { id: cart.id },
        data: {
          items: cart.items,
          ...prices,
        },
      });

      revalidatePath(`/product/${product.slug}`);
      return {
        success: true,
        message: `${product.name} ${
          existItem ? "updated in" : "added to"
        } cart successfully`,
      };
    }
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

export const removeItemFromCart = async (productId: string) => {
  try {
    const sessionCartId = cookies().get("sessionCartId")?.value;
    if (!sessionCartId) throw new Error("Cart Session not found");

    const product = await prisma.product.findUnique({
      where: { id: productId },
    });
    if (!product) throw new Error("Product not found");

    const cart = await getMyCart();
    if (!cart) throw new Error("Cart not found");

    const exist = cart.items.find((x: any) => x.productId === productId);
    if (!exist) throw new Error("Item not found");

    if (exist.qty === 1) {
      cart.items = cart.items.filter(
        (x: any) => x.productId !== exist.productId
      );
    } else {
      exist.qty -= 1;
    }

    const prices = calcPrice(cart.items);

    await prisma.cart.update({
      where: { id: cart.id },
      data: {
        items: cart.items,
        ...prices,
      },
    });

    revalidatePath(`/product/${product.slug}`);
    return {
      success: true,
      message: `${product.name} ${
        cart.items.find((x: any) => x.productId === productId)
          ? "updated in"
          : "removed from"
      } cart successfully`,
    };
  } catch (error: any) {
    return { success: false, message: formatError(error) };
  }
};

```

- components/shared/product/add-to-cart.tsx

```js
"use client";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { addItemToCart, removeItemFromCart } from "@/lib/actions/cart.actions";
import { CartItem } from "@/lib/types";
import { Cart } from "@prisma/client";
import { Loader, Minus, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function AddToCart({
  cart,
  item,
}: {
  cart?: (Cart & { items: CartItem[] | null }) | null, // Ensure cart can be null or have nullable items
  item: Omit<CartItem, "cartId">,
}) {
  const router = useRouter();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const existItem = cart?.items?.find((x) => x.productId === item.productId);

  return existItem ? (
    <div>
      <Button
        type="button"
        variant="outline"
        disabled={isPending}
        onClick={() => {
          startTransition(async () => {
            const res = await removeItemFromCart(item.productId);
            toast({
              variant: res.success ? "default" : "destructive",
              description: res.message,
            });
          });
        }}
      >
        {isPending ? (
          <Loader className="w-4 h-4 animate-spin" />
        ) : (
          <Minus className="w-4 h-4" />
        )}
      </Button>
      <span className="px-2">{existItem.qty}</span>
      <Button
        type="button"
        variant="outline"
        disabled={isPending}
        onClick={() => {
          startTransition(async () => {
            const res = await addItemToCart(item);
            toast({
              variant: res.success ? "default" : "destructive",
              description: res.message,
            });
          });
        }}
      >
        {isPending ? (
          <Loader className="w-4 h-4 animate-spin" />
        ) : (
          <Plus className="w-4 h-4" />
        )}
      </Button>
    </div>
  ) : (
    <Button
      className="w-full"
      type="button"
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          const res = await addItemToCart(item);
          if (!res.success) {
            toast({
              variant: "destructive",
              description: res.message,
            });
            return;
          }
          toast({
            description: `${item.name} added to the cart`,
            action: (
              <ToastAction
                className="bg-primary"
                onClick={() => router.push("/cart")}
                altText="Go to cart"
              >
                Go to cart
              </ToastAction>
            ),
          });
        });
      }}
    >
      {isPending ? <Loader className="animate-spin" /> : <Plus />}
      Add to cart
    </Button>
  );
}
```

- go to app/(root)/product/[slug]

-replace Add to cart button with AddToCart Component.

```js
{product.stock !== 0 && (
                  <div className=" flex-center">
                    <AddToCart
                      cart={cart}
                      item={{
                        productId: product.id,
                        name: product.name,
                        slug: product.slug,
                        price: round2(product.price),
                        qty: 1,
                        image: product.images![0],
                      }}
                    />
                  </div>
                )}
```

The useTransition hook in React is used to manage state transitions and defer updates that are not urgent, allowing for a smoother and more responsive user experience. This hook is particularly useful when you have updates that may take a while to complete, such as fetching data from an API or performing complex calculations.

### Shopping cart page

- display list of items in shopping cart.
- here user can increase/decrease item in cart.
- remove item from cart.
