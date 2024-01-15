# DOC

[OPEN DOC](https://docs.google.com/document/d/1ELQUPHZVlOkczI4yI2p_uJD5po9nPI-NFIRUnzzEa3k/edit?usp=sharing)

## Configure git

```

Set your username:

 git config --global user.name "Robert Welker"

Set your email address:

git config --global user.email "robert123@gmail.com"

Now u can check the status of you usename and email

git config --list

Note: your directly also change the config file using below command


git config --global edit


```

## Let's create project now and practice the git command

- create new folder
- switch to new folder
- git init ( initialize the folder for git repository)
- create some file, script.js, index.html, style.css add some code

## commands to add

- (git add) filename
  or
- (git add .) // adds all the changes
- (git status) // to check the status
- (git commit -m "initial commit") to commit the change to git resporistary. add the resonable message about the file and changes

- (git log) // to check how may commit done previously

- to create branch
- (git branch feature)

- To switch to branch
- (git checkout feature)

or

- you can use single command to crete branch and switch to the branch

  - (git checkout -b feature2)

- git add .
- git commit -m "update"
- git push
  or
- git push --set-upstream origin feature2

- switch to parent branch and use below command to merge the feature branch
- (git merge feature2)

## how to create branch and switch to different branch

- git branch // first u will see the master branch if there is no any branch crearted previoulsy.
- git log

- git checkout -b feature-branch // create new feature-branch and switch to the new branch

create different feature branches as you progress in your project. commit regularly.

![git-branch](/image/github-flow.jpg)

# Create Accout in Github

[Github Link](https://github.com/)

**What is GitHub and why it is used?**
GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere. This tutorial teaches you GitHub essentials like repositories, branches, commits, and pull requests.

# Generating SSh key

[Document](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account?tool=webui)

### command to generate SSH key

- open your Window PoweSheel as administrator
- use your github email id

- ssh-keygen -t ed25519 -C "your_email@example.com"

**add your SSH private key to the ssh-age**

- ssh-add ~/.ssh/id_ed25519

**copy the SSH key**

- cat ~/.ssh/id_ed25519.pub | clip

**go to github setting SSH and GPG keys**

- Click new SSH key
- give title
- paste the key in box
- click on add SSH button

# To setup linter

- add eslint and prettier extension to your vscode editor.

## initialize your project folder

npm init -y

install the below package.

```
npm i -D eslint eslint-config-prettier eslint-plugin-prettier prettier

```

now create .eslintrc file in root directory and add below code.

```
{
  "extends": [
    "plugin:prettier/recommended"
  ],

  "plugins": ["prettier"],

  "rules": {
    "prettier/prettier": "error"
  }
}

```

now create .prettierrc file in root directory and add below code.

```
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false
}
```

As the final step, you need to enable formatOnSave in VSCode. You can add the following line to the settings.json file for that:

```
"editor.formatOnSave": true,

```

[Integrating Prettier and ESLint With VS Code](https://enlear.academy/integrating-prettier-and-eslint-with-vs-code-1d2f6fb53bc9)
