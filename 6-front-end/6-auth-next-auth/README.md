# Class Recording

1. [Auth class -1](https://youtu.be/V9OYR0DCd18)

2. [Auth(nextauth) class -2](https://youtu.be/JIXbfX0aySg)

3. [From Youtube- Nextauth](https://www.youtube.com/watch?v=splh0ZIo-s4)

# What is authentication?

- Authentication is the process of letting users signup/signin into websites via `username` / `password` or using `SSO` (single sign on)

## What are cookies

Cookies in web development are small pieces of data sent from a website and stored on the user's computer by the user's web browser while the user is browsing. They are designed to be a reliable mechanism for websites to remember things (very similar to local storage)

1. `Session Management:` Cookies allow websites to identify users and track their individual session states across multiple pages or visits.

2. `Personalization:` Websites use cookies to personalize content and ads. For instance, cookies might store information about a user's preferences, allowing the site to tailor content or advertisements to those interests.

3. `Tracking:` Cookies can track users across websites, providing insights into browsing behavior. This information can be used for analytics purposes, to improve website functionality, or for advertising targeting.

4. `Security:` Secure cookies can be used to enhance the security of a website by ensuring that the transmission of information is only done over an encrypted connection, helping to prevent unauthorized access to user data.

# Authentication using jwt

What are JSON Web Tokens (JWT)?

JSON Web Tokens (JWT) is an open standard (RFC 7519) for securely representing claims between two parties. The parties can be a server and a client, or different servers. JWTs are digitally signed, compact, and self-contained, making them ideal for transmitting information securely between parties.

JWTs consist of three parts separated by periods: the header, payload, and signature. The header contains information about the algorithm used for signing the token, the payload contains claims (information), and the signature ensures the integrity of the token.

`json web token - jwt`
json -
web -
token -

- jwt just convert user information into long string.

**JWT Workflow for User Authentication**

- signup (fill the form, email, password) - user data will be stored in database
- signin (email, password) - if email and password matched, then signin is success

1. check if password is correct
2. check if user is verified

- server will return jwt_token and stored in borwser cookies.

**User Login**

![user login](./images/jwt.png)

- When a user attempts to log in, the server verifies the provided credentials.
- If the credentials are valid, the server generates a JWT containing user-specific data and signs it with a secret key.
- The server sends the JWT back to the client

**Client Requests**

- The server validates the JWT, ensuring its authenticity and integrity, and authorizes the user for specific resources or actions.

**Implementing User Authentication and Authorization with Node.js and Express.**

`Step 1: Set Up the Project`

- Create a new directory and initialize a Node.js project:(auth-jwt)

- initialize the project - `npm init -y`

`Step 2: Install Dependencies`

`npm install express jsonwebtoken bcrypt mongoose nodemon`

`Step 3: Create the Server`

- Create an app.js file and set up the basic Express server:
  app.js

```js
// app.js



const express = require('express');

const app = express();



// Set up middleware to parse JSON data

app.use(express.json());



// Start the server

const port = process.env.PORT || 3000;

app.listen(port, () => {

  console.log(`Server started on port ${port}`);

});

```

`Step 4: Set Up MongoDB Connection`

- Create a separate db.js file to establish a connection to the MongoDB database:

```js
// db.js



const mongoose = require('mongoose');

mongoose.connect('mongoose connection string')

.then(() => {

 console.log('Connected to MongoDB');

})

.catch((err) => {

 console.error('Error connecting to MongoDB:', err.message);

});

```

`Step 5: Create a User Model`

- Create a models/user.js file to define the User schema and model for MongoDB:

```js
// models/user.js
const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({

 email: { type: String, required: true, unique: true },

 password: { type: String, required: true },

});



const User = mongoose.model('User', userSchema);



module.exports = User;
```

`Step 6: Implement User Registration`

- In the app.js file, add the route to handle user registration:

```js
// app.js
const bcrypt = require('bcryptjs');
require('./db');

const User = require('./models/user');

 

// Route for user registration

app.post('/register', async (req, res) => {

  try {

    const { email, password } = req.body;

 

    // Check if the user already exists

    const existingUser = await User.findOne({ email });

    if (existingUser) {

      return res.status(400).json({ error: 'User already exists' });

    }

 

    // Hash the password using bcrypt

    const hashedPassword = await bcrypt.hash(password, 10);

 

    // Create a new user in the database

    const newUser = new User({

      email,

      password: hashedPassword,

    });

 

    await newUser.save();

    return res.status(201).json({ message: 'User registered successfully' });

  } catch (err) {

    return res.status(500).json({ error: 'Internal server error' });

  }

});

```

`Step 7: Implement User Login and JWT Generation`

- In the same app.js file, add the route for user login and JWT generation:

```js
const jwt = require('jsonwebtoken');

const secretKey = 'some$secrectcode123#'; // Replace this with a strong and secure key

 

// Route for user login

app.post('/login', async (req, res) => {

  try {

    const { email, password } = req.body;

 

    // Check if the user exists in the database

    const user = await User.findOne({ email });

    if (!user) {

      return res.status(401).json({ error: 'Invalid credentials'});

    }

// Compare the provided password with the hashed password using bcrypt

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {

      return res.status(401).json({ error: 'Invalid credentials' });

    }

    // Generate a JWT for the authenticated user

    const token = jwt.sign({ userId: user._id, email: user.email }, secretKey, {

      expiresIn: '1h', // Token will expire in 1 hour

    });

 

    return res.status(200).json({ token });

  } catch (err) {

    return res.status(500).json({ error: 'Internal server error' });

  }

});

```

`Step 8: Secure Routes with JWT Authentication Middleware`

- Now, we will implement a middleware function to authenticate and authorize requests before accessing protected routes:

```js
// app.js

 

// Middleware to authenticate and authorize requests

const authenticateUser = (req, res, next) => {
  try {
    // Extract the token from the Authorization header

    const token = req.header("Authorization").split(" ")[1];
    console.log(token)

    // Verify the token using the secret key
    if (token) {
      let user = jwt.verify(token, secretKey);
      console.log(user)

      // Attach the user ID and email to the request object for further processing
      req.userId = user.userId;

      req.email = user.email;
    } else {
      res.status(401).json({ message: "Unauthorized User" });
    }

    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};


 

// Protected route example

app.get('/protected', authenticateUser, (req, res) => {

  return res.status(200).json({ message: 'You have access to this protected route' });

});

```

# Next Auth

- Website authjs -  [Auth.js](https://authjs.dev/getting-started)

Setp1: `Install nextjs project and configure prettier and eslint step2 and step 3`

Step2: `npm install -D prettier eslint-config-prettier prettier-plugin-tailwindcss`

Step3: `create prettier.config.ts file in root of the project and add below code next update the .eslintrc.json`

```js
//prettier.config.ts

module.exports = {
    "plugins": [require("prettier-plugin-tailwindcss")]
}

// .eslintrc.json

{
  "extends": ["next/core-web-vitals", "prettier"]
}


```
- From authjs website follow the instruction to setup the nextauth.

Step 4: `npm install next-auth@beta`

- add .env.local file and `npx auth secret`
`AUTH_SECRET=qbSSVh5jLqEUwFPJ3wttACm6owwEO3oAbhuVW5EQLQY=`

- follow the steps in authjs website.

Step - 5: `setup prisma to manage database, create schema and push the database schema`
- `npm i prisma`
- `npx prisma init`
`npm install @prisma/client @auth/prisma-adapter`
- Add prisma client
- create schema
- `npm exec prisma migrate dev`
- `npx prisma db push`
- `npx prisma studio`

We completed the setting up prisma.

Step-6 : 
- import PrismaAdapter in auth.ts
 `import { PrismaAdapter } from "@auth/prisma-adapter"`

 ```js
import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from '@prisma/client'
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [],
})

 ```

Step -7 
- create register and login form form for user. we will use shadcn so setup shadcn.

`npx shadcn-ui@latest add form`

`npx shadcn-ui@latest add input`


/register/RegisterForm.tsx
/register/page.tsx  and import RegisterForm

```js
"use client"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import axios from 'axios';
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required.",
  }),
  email:z.string().min(1, {message:"Email is required"}),
  password:z.string().min(6, {message:"Password is required"})
})

export function RegisterForm() {
  const router = useRouter();
// 1. Define your form.
const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email:"",
      password:"",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    
    try {
      await axios.post('/api/register', values);
      router.push('/login');
  
    } catch (error) {
      console.log(error)
    }
    
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
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
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
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormDescription>
                This is your email
              </FormDescription>
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
                <Input placeholder="Password" {...field} />
              </FormControl>
              <FormDescription>
                Password
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      
        <Button type="submit">Create New User</Button>
        <div className="mt-2">
        <Link href='/login' >If you have account ? go to login page</Link>
        </div>
      
      </form>
    </Form>
  )
}


```


step -8 : Build the API for register form.
- api/register/route.ts
- user bcrypt to hash the password before saving to the database.

- `npm i bcrypt`
- `npm i @types/bcrypt`

```js
// route.ts

import prisma from "@/prisma/client";
import bcrypt from 'bcrypt';

import { NextResponse, NextRequest } from "next/server";
import { z } from "zod"
const formSchema = z.object({
    name: z.string().min(1, {
      message: "Name is required.",
    }),
    email:z.string().min(1, {message:"Email is required"}),
    password:z.string().min(6, {message:"Password is required"})
  })
  
export const POST = async(request:NextRequest)=>{
const body = await request.json();
console.log(body)
const validation = formSchema.safeParse(body);
if(!validation.success){
    return NextResponse.json({message:"Validation failed"}, {status:401})
}
const user = await prisma.user.findUnique({where:{email:body.email}})
if(user){
    return NextResponse.json({message:"user exist, please login"}, {status:400})  
}
const pwhashed = await bcrypt.hash(body.password, 10);

await prisma.user.create({
    data:{
        name:body.name,
        email:body.email,
        password:pwhashed
    }
})

return NextResponse.json({message:"Success, user created"}, {status:200})
}

```

## LoginForm

// LoginForm.tsx

```js
"use client"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button"
import { login } from "@/lib/actions";
import {z} from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  email:z.string().min(1, {message:"Email is required"}),
  password:z.string().min(6, {message:"Password is required"})
})

export function LoginForm() {
  const router = useRouter();
// 1. Define your form.
const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email:"",
      password:"",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
   try {
      await login(values)
   } catch (error) {
    console.log(error)
   }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
         <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormDescription>
                This is your email
              </FormDescription>
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
                <Input placeholder="Password" {...field} />
              </FormControl>
              <FormDescription>
                Password
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
       
        <Button type="submit">Login</Button>
      </form>
      <div className="my-2">
        <Link href='/register'>If you don&apos;t have account ? create new account</Link>
        </div>
    </Form>
  )
}


```

## action.ts

```js
'use server';

import { AuthError } from 'next-auth';
import { signIn, signOut } from '@/auth';
import { z } from "zod"
const loginSchema = z.object({
    email:z.string().min(1, {message:"Email is required"}),
    password:z.string().min(6, {message:"Password is required"})
  })

const defaultValues = {
 email: '',
 password: '',
};

export async function login(values: z.infer<typeof loginSchema>) {
 try {
  const validatedFields = loginSchema.safeParse(values);

  if (!validatedFields.success) {
   return {
    message: 'validation error',
    errors: validatedFields.error.flatten().fieldErrors,
   };
  }

  const {email, password} = validatedFields.data;
  
  await signIn('credentials', {email, password, redirectTo:'/protected'});

  return {
   message: 'success',
   errors: {},
  };
 } catch (error) {
  if (error instanceof AuthError) {
   switch (error.type) {
    case 'CredentialsSignin':
     return {
      message: 'credentials error',
      errors: {
       ...defaultValues,
       credentials: 'incorrect email or password',
      },
     };
    default:
     return {
      message: 'unknown error',
      errors: {
       ...defaultValues,
       unknown: 'unknown error',
      },
     };
   }
  }
  throw error;
 }
}

export async function logout() {
 await signOut();
}


```

## auth.ts

```js
import NextAuth from 'next-auth';
import {PrismaAdapter} from "@auth/prisma-adapter"
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import prisma from './prisma/client';
import bcrypt from 'bcrypt'

async function getUser(email:string) {
 const user = await prisma.user.findUnique({
    where:{email:email}
 })
    return user
}

export const {
 auth,
 signIn,
 signOut,
 handlers
} = NextAuth({
    adapter:PrismaAdapter(prisma),
 ...authConfig,
 providers: [
  Credentials({
   name: 'credentials',
   credentials: {
    email: {},
    password: {},
   },
   async authorize(credentials) {
      const {email, password} = credentials;
    const user = await getUser(email as string);
    if(!user || !user.password) return null;
const pwMatch =await bcrypt.compare(password as string, user.password)

if(pwMatch) {
   return user 
}else {
   return null
}

   
   },
  }),
 ],
});

```

## auth.config.ts

```js
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
 session: {
  strategy: 'jwt',
 },
 pages: {
  signIn: '/login',
  signOut: '/',
 },
 callbacks: {
  authorized({ auth }) {
   const isAuthenticated = !!auth?.user;

   return isAuthenticated;
  },
 },
 providers: [],
} satisfies NextAuthConfig;

```

## middleware.ts

```js
import NextAuth from 'next-auth';
import { authConfig } from '@/auth.config';
import { DEFAULT_REDIRECT, PUBLIC_ROUTES, ROOT, DEFAULT_LOGIN_REDIRECT } from '@/routes';

const { auth } = NextAuth(authConfig);

export default auth((req) => {
 const { nextUrl } = req;

 const isAuthenticated = !!req.auth;
 const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);

 if (isPublicRoute && isAuthenticated)
  return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));

 if (!isAuthenticated && !isPublicRoute)
  return Response.redirect(new URL(ROOT, nextUrl));
});

export const config = {
 matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

```