# Nextjs Project - fix-issue

[Github project Link](https://github.com/369webforall/fix-issue)

## Class Recording
[issue tracker - class 1](https://youtu.be/Q2tWxNqfUtM)

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

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

 ```

 - also you will see .env file.
 - add database connection string to your .env file.
 - make sure to ignore the .env file in .gitignore

 `DATABASE_URL="postgresql://postgres:password@localhost:5433/fix-issue?schema=public"`

 **Creating the issue model**

 **Building an API**
 - add folder `app/api/issues/new/route.ts`

**Setting up radix ui**

- [Radixui](https://www.radix-ui.com/)

- Get started / installation

**Building new issue page**