# Docker

## Video

1. [Docker class 1](https://youtu.be/fRF2yknPjZ4)

2. [Docker class 2](https://youtu.be/_cdHMqsuaJU)

## class content

### Step 1 - Why Docker?

- Docker provides a lightweight, portable, and consistent environment for application development, testing, and deployment, ensuring that software runs reliably across different computing environments.
- Running processes in isolated environments
- Starting projects and auxiliary services locally.

![Docker](./images/docker_2.png)

![Docker lifecycle](./images/docker_3.png)

### Step 2 - Containerization

What are containers ?

- Containers package and distribute software applications, making them easy to deploy and run consistently across different environments. They bundle an application with all its dependencies and libraries into a single unit, runnable on any machine with a container runtime like Docker.

Why containers ?

1. Everyone has different Operating systems
2. Steps to run a project can vary based on OS
3. Extremely harder to keep track of dependencies as project grows

`Reference`

For Reference, the following command starts mongo in all operating systems -

```ts
docker run -d -p 27017:27017 mongo
```

### Step 3 - Installing docker

[Install Docker Engine](https://docs.docker.com/engine/install/)

Make sure you’re able to run the `docker cli` locally -

![docker cli](./images/Screenshot_1.png)

### Step 4 - Inside docker

- As an application/full stack developer, you need to be comfortable with the following terminologies -

2. Docker Engine
3. Docker CLI - Command line interface
4. Docker registry

- Docker Engine: The core part of Docker that runs and manages containers on a host operating system.
  Containers are standardized executable components combining application source code with the operating system (OS) libraries and dependencies required to run that code in any environment.

- Docker CLI (Command Line Interface): A tool to interact with Docker from the terminal, allowing you to build, run, and manage Docker containers.

```ts
docker run -d -p 27017:27017 mongo

```

- Docker Registry: A storage and distribution system for Docker images, such as Docker Hub, where you can upload and download container images.

[docker registry](https://app.docker.com/)

### Step 5 - Images vs containers

- `Images:` Immutable, read-only templates used to create containers. They include the application code, runtime, libraries, and dependencies needed for an application to run.

- `Containers:` Runtime instances of images that are isolated and portable. They include the application and its environment, allowing it to run consistently across different platforms and environments. Containers can be started, stopped, moved, and deleted, and they retain any changes made during their execution.

### Step 6 - Port mapping

```ts
docker run -d -p 27018:27017 mongo

```

![Port mapping](./images/port_1.png)

### Step 7 - Common docker commands

1. docker images
2. docker ps
3. docker run
4. docker build

5. docker images
   Shows you all the images that you have on your machine

6. docker ps
   Shows you all the containers you are running on your machine

7. docker run
   Lets you start a container

-p ⇒ let’s you create a port mapping
-d. ⇒ Let’s you run it in detatched mode

4. docker build
   Lets you build an image. We will see this after we understand how to create your own Dockerfile

5. docker push
   Lets you push your image to a registry

6. Extra commands
   docker kill
   docker exec

### Step 8 - Dockerfile

- What is a Dockerfile

If you want to create an image from your own code, that you can push to dockerhub, you need to create a Dockerfile for your application.

A Dockerfile is a text document that contains all the commands a user could call on the command line to create an image.

- How to write a dockerfile

A dockerfile has 2 parts

- Base image
- Bunch of commands that you run on the base image (to install dependencies like Node.js)

`Let’s write our own Dockerfile`

```ts
# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies specified in package.json
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that the application will run on
EXPOSE 3000

# Define the command to run the application
CMD ["node", "app.js"]

```

Explanation

`FROM node:14:` This line specifies the base image to use for the Docker image. In this case, it's an official Node.js image with version 14. This base image includes Node.js and npm, which are necessary to run a Node.js application.

`WORKDIR /app:` This sets the working directory for any subsequent instructions in the Dockerfile. If the directory doesn't exist, it will be created. All the following commands will be run from this directory.

`*COPY package.json ./**:` This copies the package.json and package-lock.json files from the local machine to the working directory in the container. The package-lock.json file ensures that the exact same versions of dependencies are installed.

`RUN npm install:` This runs the npm install command to install the dependencies specified in package.json.

`COPY . .:` This copies all the files and directories from the current directory on the local machine to the working directory in the container. This includes the application code.

`EXPOSE 3000:` This exposes port 3000 on the container. This is the port that the application will listen on. This is mainly for documentation purposes and does not actually publish the port on the host machine (this is done using the -p flag when running the container).

`CMD ["node", "app.js"]:` This specifies the command to run when the container starts. In this case, it runs the Node.js application using node app.js.

#### Step- 9 and 10 - Building and Running the Docker Image

- To build and run the Docker image created by this Dockerfile, follow these steps:

1. Build the Docker Image:

```ts
docker build -t my-node-app .

```

This command builds a Docker image using the Dockerfile in the current directory (.) and tags it with the name my-node-app.

2. Run the Docker Container:

```ts
docker run -p 3000:3000 my-node-app

```

### Step - 11 - Passing in env variables

```ts
// start the container for postgresql

docker run --name my_db -e POSTGRES_PASSWORD=password123 -p 5432:5432 -d postgres

```

- `to connect to the PostgreSQL Database:`

```ts
postgres://postgres:password123@localhost:5432/my_db

```

- so to set this to env varaible

```ts
docker run -p 3000:3000 -e DATABASE_URL="postgres://postgres:password123@localhost:5432/my_db"
```

- The -e argument let’s you send in environment variables to your node.js app

postgres://username:password@host:port/database

postgres://postgres:mysecretpassword@localhost:5432/postgres
