# Nextjs Project - fix-issue

[Github project Link](https://github.com/369webforall/fix-issue)

## Class Recording
[issue tracker - class 1](https://youtu.be/Q2tWxNqfUtM)

[issue tracker - class 2](https://youtu.be/a5jLd0ok900)

[issue tracker - class 3- Create issue](https://youtu.be/45vPDy14gQk)

[issue tracker - class 4- Create issue](https://youtu.be/X3vSzW26Xlk)

[issue tracker - class 5- view issue re-record](https://youtu.be/l8796RXETU4)

[issue tracker - class 5- view issue-1](https://youtu.be/v0Xi3VW5gxU)

[issue tracker - class 5- view issue-2](https://youtu.be/b6EjDL3zgVM)


[issue tracker - class 6- Update Issue](https://youtu.be/lTyqq_CWCv0)

[issue tracker - class 7- Delete Issue](https://youtu.be/FhpHWK-_41M)


[issue tracker - class 8- Authentication](https://youtu.be/jMrx2Nhg0GM)

[issue tracker - class 9- Assigned user - 1](https://youtu.be/75xqjDHP33Y)

[issue tracker - class 10- Assigned user to issue - 2](https://youtu.be/-yZxbmkiKU8)

[issue tracker - class 11- Filter and sort](https://youtu.be/OmFhq0Hla2s)





## Project Topics

### WHAT SHOULD YOU KNOW FIRST

- Nextjs/React
- What is components
- Import / Export components
- Client and server components
- Routing
- Nextjs folder structure
- Building APIs
- Database (Mysql, postgresql, mongodb) integration with prisma
- Authentication with Auth.js
- Basic of tailwind
- Radix ui

### VSCODE EXTENSION

- ES7 + React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- eslint
- prisma

### install packages & configure vscode settings.

- `npm install -D prettier eslint-config-prettier prettier-plugin-tailwindcss`

- go to vscode setting, `search: files:associations`

- click add button; `item: \*.css value:tailwindcss`
- this will make tailwind syntax work in css file
- setting: editor:quick suggestions delay
- `others : on`
- change`strings : on`

- [prettier config](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

`add file to your main project folder and name it prettier.config.js`

```js
//prettier.config.js

module.exports = {
    "plugins": [require("prettier-plugin-tailwindcss")]
}
```

- change default formatter from none to prettier-code formatter
`Editor:default formatter; select prettier-code formatter`

use `alt+shift+f` for automatic formatting

- also make change to `.eslintrc.json`

`by adding below code there will be no conflict between prettier and eslint.`

```js
{
  "extends": ["next/core-web-vitals", "prettier"]
}

```

### Setting up the Project

1. Project Roadmap

a. `Core feature - CRUD operation for issues.`

- crating issues
- view issues
- update issue
- delete issue

b. `Advanced features`

- User Authentication
- Assigning problems
- Sorting problems
- Filtering problems
- Pagination
- Dashboard

**Our Goal should be to write working code and then imporve it as needed**

2. create Navbar

3. style navbar and add active link 
- use `npm install classnames` package to to apply classes based on condition.
- `import {usePathname} from 'next/navigation'`

### Creating issues

1. Setting up database - postgresql
2. Setting up prisma
3. Creating the issue model
4. Building an API
5. Setting up radix ui
6. Building new issue page
7. Add Markdown editor
8. Handling form submission
9. Handling errors
10. Implementing client side validation
11. Extracting the error message component
12. adding spinner

**Setting up database - postgresql**

- installed postgresql in your computer. make sure to get password and port.

`postgresql://postgres:password@localhost:5433/fix-issue?schema=public`

**Setting up prisma**
 - `npm install prisma` and then run below command
 - `npx prisma init`
 - Now you will see  the changes in your project.
 - it will create `prisma` folder and add `schema.prisma` file.

 ```js
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

 ```

 - also you will see .env file.
 - add database connection string to your .env file.
 - make sure to ignore the .env file in .gitignore

 `DATABASE_URL="postgresql://postgres:password@localhost:5433/fix-issue?schema=public"`

 **Creating the issue model**

 ```js
model Issue {
  id String @id @default(uuid())
  title String @db.VarChar(50)
  description String @db.Text
  status Status @default(OPEN)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

enum Status {
  OPEN
  IN_PROGRESS
  CLOSED
}

 ```

 **Building an API**
 - add folder `app/api/issues/new/route.ts`

 [Article for zod](https://www.educative.io/answers/what-is-zod)

**Setting up radix ui**

- [Radixui](https://www.radix-ui.com/)

- Get started / installation

**Building new issue page**
- We use radix ui to add form.
- Radix-ui (TextField/ TextArea)
- We can replace textarea with react component library called React SimpleMDE (EasyMDE) Markdown Editor

`npm install --save react-simplemde-editor easymde`

`import SimpleMDE from "react-simplemde-editor";`
`import "easymde/dist/easymde.min.css";`

[React SimpleMDE (EasyMDE) Markdown Editor](https://www.npmjs.com/package/react-simplemde-editor)


**Handling form submission**

- We will use very popular library called `React Hook Form`
- This form makes very easy for form submission, track changes in our form,  easy to use validation and display validation error.

`npm install react-hook-form`

`import { useForm, SubmitHandler } from "react-hook-form" `

- next define the interface of our form
9749424286
```js
inteface IssueFormData {
  title:string;
  description:string;
}

```
**Handling Errors**

**Implementing client side valiation**

- we can use same schema for form and the API, so extract the schema and place in seperate file.

`npm i @hookform/resolvers`

**Extracting the error message component**
- create ErrorMessage component and add all logic to display error here.

**Add spinner**

## Viewing issues
1. Showing the issues
2. Building the issue status badge
    - In TypeScript, a "record" is one of the utility types that allows you to define key-value pairs where both the keys and the values have specific types. This utility type is particularly useful when you need to create an object with a fixed set of keys and ensure type safety.
    ```js
      const statusMap:Record<Status, {label:String, color:'green'|'orange'|'red'}> = {
        OPEN:{label:'Open', color:'green'},
        IN_PROGRESS:{label:'In-progress', color:'orange'},
        CLOSED:{label:'Closed', color:'red'},
      }
    ```
3. Adding loading skeletons

delay the loading of the page
    `npm i delay`

    ```js
    import delay from 'delay' 
     await delay(3000)
     ```

`npm install react-loading-skeleton`

[react-loading-skeleton](https://www.npmjs.com/package/react-loading-skeleton)


import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

<Skeleton /> // Simple, single-line loading skeleton
<Skeleton count={5} /> // Five-line loading skeleton

4. Showing issue details page
  - here our goal is to just fetching the issue data with id, and displaying that with no style.
5. Styling the issue details page
    - Add style to the details page.

6. Adding Markdown preview
 - We have to use seperate package to preview the markdown content.
  - `npm i react-markdown`
  - [react-markdown](https://www.npmjs.com/package/react-markdown)

  ```js
  import Markdown from 'react-markdown'

<Markdown>page details</Markdown>

  ```

  - in tailwindcss heading and list items are unstyled, by default, so to fix this issue we need to add tailwindcss/typography

[tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography)


7. Building a Styled Link component
8. Additional Loading Skeletons
9. Disabling Server side rendering
10. Refactoring and organizing imports


## Updating Issues
1. Adding the  Edit Button
2. Applying the single  responsibility principle
3. Building Edit issue page
4. Building an API
5. Updating and Issue
6. Unserstanding caching
  **Caching**
  ### Data cache:
  - when we fetch data using fetch();
  - nextjs store data in file system.
  - it is permanent until we redeploy.

  - if you want to disable this behaviour then we pass `fetch('...', 'no-store')`
  - we can also add timebase revalidation. `fetch('...', {next:  {revalidation:3600}})`
  - This will revalidate the data after that time.

### Full Route cache(Cache on the server)

  **Rendering**

  a. static (render statically at build time, if no parameter, then route are consider static)
    
  b. dynamic (render dynamically at request time, with parameter routes are consider dynamic)


7. Improving the Loading Experience

## Deleting Issues 

1. Adding a Delete Button
2. Adding a confirmation Dialog Box
3. Building an API
4. Deleting an issue
5. Handling an errors
6. Improving an user experience
7. Removing duplicate skeletons

## Authentication

1. Setting up nextauth
2. Configure google provider
3. Adding the prisma adapter
4. Adding login and logout links
5. Change layout of navbar
6. Adding dropdown menu
7. Trobuleahooting any error (Avatar not loading)
8. Refactor code
9. Adding loading skeleton
10. Securing the application



## Assign issue to users

1. Build the assignee select component
2. Populating the Assignee select component
3. Setting up react query
4. Fetching data and react query
5. Add assigned issue to prisma schema
6. implementing the API 
7. Assigne issue to User
8. Show toast notification 
9. Refactor the Assingnee select component

**Step details**

- Add dropdown list to select the user.
- use select component from Radix ui.

```js
// /issues/view/_components/Assignee.tsx

const[users, setUsers] = useState<User[]>([]);

useEffect(()=>{
  const fetchUsers = async ()=>{
    const {data} = await axios.get<User[]>('/api/users');
    setUsers(data)
  }
  fetchUsers();

}, [])

<Select.Root>
  <Select.Trigger placeholder='Assign user....'/>
  <Select.Content>
    <Select.Group>
      <Select.Label>Suggestions</Select.Label>
      <Select.Item value="1">Dev</Select.Item>
      <Select.Item value="2">Robert</Select.Item>
      // map users and use 
      {users.map((user)=>(
        <Select.Item key = {user.id} value={user.id}>{user.name}</Select.Item>
      ))}
    </Select.Group>
  </Select.Content>
</Select.Root>

```

- In React we can fetch data using useEffect hook and store in useState variable.
- There is issue with approch,
- Don't have any error handling code. we can add the error handling code, but again what if call to back backend failed. there is no logic for retrying to fetch the data.
- There is no caching implemented here.
- every time we have to fetch the data if needed.

- For this solution we can use `TanStack Query` library for data fetching, error handling and caching.

[https://tanstack.com/](https://tanstack.com/query/v4/docs/framework/react/installation)

`npm i @tanstack/react-query`

- create `QueryClientProvider.tsx` in root of the project.

```js
'use client'

import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider
} from '@tanstack/react-query'
import { PropsWithChildren } from 'react'

const queryClient = new QueryClient({})

const QueryClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <ReactQueryClientProvider client={queryClient}>
      {children}
    </ReactQueryClientProvider>
  )
}

export default QueryClientProvider

```

- it use react context to share the information with children component.
- make `use client`
- make sure to wrap the every thing inside the body with `QueryClientProvider` component



**fetch user PI**

```js
// fetch user api/users/route.ts
import prisma from '@/prisma/client'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany({ orderBy: { name: 'asc' } })
  return NextResponse.json(users)
}
```


**fetch data with react query**
- import useQuery 

```js
import {useQuery} from '@tanstack/react-query';

const AssigneeSelect = ()=>{
  const {data: users, error, isLoading}= useQuery<User[]>({
    queryKey:['users'],
    queryFn: ()=> axios.get('/api/users').then((res)=>res.data),
    staleTime: 60 * 1000, // 60 sec
    retry:3
  });

  if(isLoading) return <Skeletom />
}

```


**Add assigned issue to prisma schema**

- update the  Issue  model 

```js
assignedToUserId String?
assignedToUser User?  @relation(fields:[assignedToUserId], references:[id])


// User model

assignedIssues Issue[]

// run npx prisma migrate dev

```

**Implementing the API**

```js
// add new schema (patchIssueSchema)

import { z } from 'zod'

export const patchIssueSchema = z.object({
  title: z.string().min(1, 'title is required').max(255).optional(),
  description: z
    .string()
    .min(1, 'description is required')
    .max(65535)
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, 'AssignedToUserId is required.')
    .max(255)
    .optional()
    .nullable()
})


// PATCH api 

import { patchIssueSchema } from '@/app/validationSchemas'
import { auth } from '@/auth'
import prisma from '@/prisma/client'
import { NextRequest, NextResponse } from 'next/server'

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // const session = await auth()
  // if (!session) return NextResponse.json({}, { status: 401 })

  const body = await request.json()
  const validation = patchIssueSchema.safeParse(body)
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 })

  const { title, description, assignedToUserId } = body
  if (assignedToUserId) {
    const user = await prisma.user.findUnique({
      where: { id: assignedToUserId }
    })
    if (!user)
      return NextResponse.json({ error: 'Invalid user' }, { status: 400 })
  }

  const issue = await prisma.issue.findUnique({
    where: { id: params.id }
  })
  if (!issue) return NextResponse.json({ error: 'Invalid issue' })

  const updatedIssue = await prisma.issue.update({
    where: { id: issue.id },
    data: { title, description, assignedToUserId }
  })

  return NextResponse.json(updatedIssue)
}

```

**Assigning an issue to user**

```js

"use client"
import React, {useState, useEffect} from 'react'
import { Select } from '@radix-ui/themes'
import axios from 'axios'
import { Issue, User } from '@prisma/client'
import {useQuery} from '@tanstack/react-query';
import Skeleton from '@/app/components/Skeleton';

const AssigneeSelect = ({issue}: {issue:Issue}) => {
const {error, isLoading, data:users}= useQuery<User[]>({
  queryKey:['users'],
  queryFn: ()=> axios.get('/api/users').then((res)=>res.data),
  staleTime: 60 * 1000, // 60 sec
  retry:3
});

if(isLoading) return <Skeleton />
    
   const assignIssue =  (userId:string)=>{
     axios.patch(`/api/issues/${issue.id}`, {assignedToUserId:userId === "unassigned" ? null : userId})
   }
  return (
    <div className='mt-4'>
  <Select.Root defaultValue={issue.assignedToUserId || "unassigned"} onValueChange={assignIssue}>
  <Select.Trigger placeholder='Assign user....'/>
  <Select.Content>
    <Select.Group>
      <Select.Label>Suggestions</Select.Label>
      <Select.Item value="unassigned">Unassigned</Select.Item>
      
   {users && users.map((user)=>(<Select.Item key={user.id} value={user.id}>{user.name}</Select.Item>)
    
   )}
    </Select.Group>
  </Select.Content>
</Select.Root>
    </div>
  )
}

export default AssigneeSelect

```

**toast notifaction**

`npm i react-hot-toast`

```js
// in assigneeSelect

import toast, {Toaster} from 'react-hot-toast'


 // below the select call the Toaster component
 
</Toaster>

// add try{}catch{}

try {

}catch(error){
  toast.error('Changes could not be saved)
}


```

## Filtering, Sorting, and Pagination 

1. Building the Filter component
2. Filtering issues
3. Making columns sortable
4. Sorting issues
5. Fix filtering bug
6. Generating dummy data
7. Building the pagination component 
8. Implementing pagination
9. Pagination issues
10. Refactoring code, extracting issuetable component


**Building the Filter component**

- We want to filter our issues with their status
- Build the component for selecting the status.
-  Add IssueStatusFilter.tsx
- import in ActionButton component.

```js

"client component"
import React from 'react'
import { Status } from '@prisma/client'
import { Select } from '@radix-ui/themes'

const statuses:{label:string, value?: Status}[] = [{label: 'All'}, 
{label:"Open", value:"OPEN"}, 
{label:"Closed", value:"CLOSED"}, 
{label:"In-progress", value:"IN_PROGRESS"}
]

const IssueStatusFilter = () => {
  return (
   <Select.Root>
    <Select.Trigger placeholder='Filter by status....'/>
    <Select.Content>
        {statuses.map((status)=><Select.Item key={status.label} value={status.value ?? 'ALL'}>{status.label}</Select.Item>)}
    </Select.Content>
   </Select.Root>
  )
}

export default IssueStatusFilter

```

**Filtering issue**

```js
 <Select.Root
      onValueChange={(status) => {
        const query = status === 'ALL' ? '' : `?status=${status}`
        router.push(`/issues/view${query}`)
      }}
    >

    // update issues/view/page.tsx

    ({searchParams}:{searchParams: {status:Status}})

    const statuses = Object.values(Status)

    const status = statuses.includes(searchParams.status) ? searchParams.status : undefined;

    const issues = await prisma.issues.findMany({
      where: {
        status: status
      }
    })

```

- Now go to issues/view/page.tsx

```js
const IssuePage = async({searchParams}:{searchParams:{status:Status}}) => {

  const statuses = Object.values(Status)
  const status = statuses.includes(searchParams.status) ? searchParams.status : undefined;
  
  const issues = await prisma.issue.findMany({
    where:{
      status:status
    }
  });

```

**Making columns sortable**

- issues/veiw/page.tsx

```js
 const columns:{label:string; 
    value: keyof Issue;
  className?:string;
   }[] = [
    {label:'Issue', value:'title'},
    {label:'Status', value:'status', className:'hidden md:table-cell'},
    {label:'Created', value:'createdAt', className:'hidden md:table-cell'}]



    <Table.Row>
      {columns.map((column)=>(
        <Table.ColumnHeaderCell key={column.value} className={column.className}><NextLink href={{query:{...searchParams, orderBy:column.value}}}>{column.label}</NextLink>
        {column.value === searchParams.orderBy && <ArrowUp className='inline'/>}
        </Table.ColumnHeaderCell>
      ))}
    </Table.Row>
```


```js
 orderBy:{
      [searchParams.orderBy]:'asc'
    }
```


## Dashboard

## Deployment