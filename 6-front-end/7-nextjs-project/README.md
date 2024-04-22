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

- prettier, eslint-config-prettier, prettier-plugin-tailwindcss

- go to vscode setting, search: files:associations
- click add button; item: \*.css value:tailwindcss
  `this will make tailwind syntax work in css file`
- setting: editor: quick suggestions delay
- others : on
- change strings : on

- [prettier config](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

`npm install -D prettier prettier-plugin-tailwindcss`

```js
// .prettierrc

- add file to your main project folder called it `prettier.config.js`


{
  "plugins": ["prettier-plugin-tailwindcss"]
}

```

- change default formatter from none to prettier-code formatter

use `alt+shift+f` for automatic formatting

- also make change to `.eslintrc.json`
- by adding below code there will be no conflict btween prettier and eslint.

```js
{
  "extends": ["next/core-web-vitals", "prettier"]
}

```

### Setting up the Project

1. Project Roadmap
   a. `Core feature - CRUD operation for problems.`

- crating problems
- view problems
- update problem
- delete problem

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
- use `classnames` package to to apply classes based on condition.

### Creating problems

1. Setting up database - postgresql
2. Setting up prisma
3. Creating the problem model
4. Building an API
5. Setting up radix ui
6. Building new problem page
7. Add Markdown editor
8. Handling form submission
9. Handling errors
10. Implementing client side validation
11. Extracting the error message component
12. adding spinner
