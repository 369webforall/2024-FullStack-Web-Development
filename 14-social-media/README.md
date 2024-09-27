# Nextjs social media project, nextjs, typescript, shadcn, postgresql, prisma ORM and clerk for authentication

## Class Recording

1. Day 1 - [setup project and navbar](https://youtu.be/ej414O81POw)

2. Day 2 - [App stories](https://youtu.be/WFMm2WtsyiI)

3. Day 3 - [App stories](https://youtu.be/2olJfgDFUn4)

4. Day 4 - [App stories](https://youtu.be/6BSpx3379gU)

5. Day 5 - [App stories](https://youtu.be/T9udvYF4KbE)

6. Day 6 - [App stories](https://youtu.be/xqhxOkhPaQ0)

7. Day 7 - [user info update](https://youtu.be/-f44zsNpcjU)

8. Day 8A - [user info update](https://youtu.be/eB_99mrsj_w)

9. Day 8B - [Friend request](https://youtu.be/raok89TpexE)

10. Day 9 - [Update user](https://youtu.be/ynrM9GXdSmM)

11. Day 10 - [Update profile image](https://youtu.be/0Ndbz9-XGks)

12. Day 11 - [display post and add comments](https://youtu.be/2l-9ra6ypcY)

## Tutorial

1. Step 1

- Create a project repository on GitHub.
- Clone the repository to your local machine.
- Install Next.js with TypeScript and Tailwind CSS, then initialize ShadCN.
- Install Prisma and initialize it.
- Create a Navbar component.
- Add the Prisma schema.

### Setup clerk for authentication

clerk website - [https://clerk.com/](https://clerk.com/)

- Login
- Create project
- copy variables to env file.

-

[ clerk doc ](https://clerk.com/docs/quickstarts/nextjs)

```ts
// app/sign-up/[[...sign-up]]/page.tsx
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return <SignUp />;
}
```

```ts
// app/sign-in/[[...sign-in]]/page.tsx

import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <SignIn />;
}
```

- Make the sign-up and sign-in routes public

- Update your environment variables

### Navbar

```ts
// components/navbar/Navbar.tsx

import Link from "next/link";
import MobileMenu from "./MobileMenu";
import {
  HomeIcon,
  SearchIcon,
  PlusCircleIcon,
  MessageCircle,
  Contact2Icon,
  LogInIcon,
  HandshakeIcon,
  BookOpenIcon,
} from "lucide-react";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Loading from "../Loading";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-orange-600">
          Next Social
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
        {/* LINKS */}
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex items-center gap-2">
            <HomeIcon />
            <span>Homepage</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <HandshakeIcon />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <BookOpenIcon />
            <span>Stories</span>
          </Link>
        </div>
        <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent outline-none"
          />
          <SearchIcon />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <Loading />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Contact2Icon />
            </div>
            <div className="cursor-pointer">
              <MessageCircle />
            </div>
            <div className="cursor-pointer">
              <PlusCircleIcon />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm">
              <LogInIcon />
              <Link href="/sign-in">Login</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
```

- Mobile menu

```ts
//components\navbar\MobileMenu.tsx

"use client";

import Link from "next/link";
import { useState } from "react";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <Cross2Icon className="text-purple-700 text-2xl font-semibold" />
        ) : (
          <HamburgerMenuIcon className="text-purple-700 text-2xl font-semibold" />
        )}
      </div>
      {isOpen && (
        <div className="absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10">
          <Link href="/">Home</Link>
          <Link href="/">Friends</Link>
          <Link href="/">Groups</Link>
          <Link href="/">Stories</Link>
          <Link href="/">Login</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
```

### Prisma Schema

- Start docker postgresql container

```ts
docker run --name social-app -e POSTGRES_PASSWORD=social -p 5435:5432 -d postgres

postgresql://postgres:social@localhost:5435/postgres

```

- create schema for social app

```ts
// User, Comment, Post, Like, Follower, FollowRequest, Block, Stroy

model User {
  id                     String          @id @default(uuid())  // Use UUID for unique ID in PostgreSQL
  username               String          @unique
  avatar                 String?
  cover                  String?
  name                   String?
  surname                String?
  description            String?
  city                   String?
  school                 String?
  work                   String?
  website                String?
  createdAt              DateTime        @default(now())
  posts                  Post[]
  comments               Comment[]
  likes                  Like[]
  followers              Follower[]      @relation("UserFollowers")
  followings             Follower[]      @relation("UserFollowings")
  followRequestsSent     FollowRequest[] @relation("FollowRequestsSent")
  followRequestsReceived FollowRequest[] @relation("FollowRequestsReceived")
  blocks                 Block[]         @relation("BlocksSent")
  blockedBy              Block[]         @relation("BlocksReceived")
  stories                Story[]
}

model Post {
  id        Int       @id @default(autoincrement())  // Postgres uses autoincrement for integers
  desc      String
  img       String?
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  user      User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  userId    String
  comments  Comment[]
  likes     Like[]
}

model Comment {
  id        Int      @id @default(autoincrement())
  desc      String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  userId    String
  post      Post     @relation(fields: [postId], references: [id], onDelete: Cascade)
  postId    Int
  likes     Like[]
}

model Like {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  userId    String
  post      Post?    @relation(fields: [postId], references: [id], onDelete: Cascade)
  postId    Int?
  Comment   Comment? @relation(fields: [commentId], references: [id], onDelete: Cascade)
  commentId Int?
}

model Follower {
  id          Int      @id @default(autoincrement())
  createdAt   DateTime @default(now())
  follower    User     @relation("UserFollowers", fields: [followerId], references: [id], onDelete: Cascade)
  followerId  String
  following   User     @relation("UserFollowings", fields: [followingId], references: [id], onDelete: Cascade)
  followingId String
}

model FollowRequest {
  id         Int      @id @default(autoincrement())
  createdAt  DateTime @default(now())
  sender     User     @relation("FollowRequestsSent", fields: [senderId], references: [id], onDelete: Cascade)
  senderId   String
  receiver   User     @relation("FollowRequestsReceived", fields: [receiverId], references: [id], onDelete: Cascade)
  receiverId String

  @@unique([senderId, receiverId])
}

model Block {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  blocker   User     @relation("BlocksSent", fields: [blockerId], references: [id], onDelete: Cascade)
  blockerId String
  blocked   User     @relation("BlocksReceived", fields: [blockedId], references: [id], onDelete: Cascade)
  blockedId String

  @@unique([blockerId, blockedId])
}

model Story {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  expiresAt DateTime
  img       String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  userId    String   @unique
}

```

### Homepage Design

```ts

```
