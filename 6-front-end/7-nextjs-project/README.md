# Nextjs Project - fix-issue

[Github project Link](https://github.com/369webforall/fix-issue)

## Class Recording
[issue tracker - class 1](https://youtu.be/Q2tWxNqfUtM)

[issue tracker - class 2](https://youtu.be/a5jLd0ok900)

[issue tracker - class 3- Create issue](https://youtu.be/45vPDy14gQk)

[issue tracker - class 4- Create issue](https://youtu.be/X3vSzW26Xlk)

[issue tracker - class 5- view issue-1](https://youtu.be/v0Xi3VW5gxU)

[issue tracker - class 5- view issue-2](https://youtu.be/b6EjDL3zgVM)

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