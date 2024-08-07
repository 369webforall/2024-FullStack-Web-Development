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
docker build -t node-app .
```

This command builds a Docker image using the Dockerfile in the current directory (.) and tags it with the name my-node-app.

2. Run the Docker Container:

```ts
docker run -d -p 3000:3000 node_app

```

`or run with env variables`

### Step - 11 - Passing in env variables and run the container

- `to connect to the PostgreSQL Database:`

```ts
docker run -d --name backend --link postgres -e DATABASE_URL=postgres://postgres:password123@postgres:5432/db_backend -p 3000:3000 node_app
```

- The -e argument let’s you send in environment variables to your node.js app

## Step 12 - More commands

1. docker kill - to kill a container
2. docker exec - to exectue a command inside a container

Example

- List all contents of a container folder

```ts
docker exec <container_name or container_id>
```

### Step 13 - Pushing to dockerhub

- Once you’ve created your image, you can push it to dockerhub to share it with the world.

1. signup to dockerhub
2. Create a new repository
3. user profile/account settings and click on Personal access tokens
4. copy the login and password, login to your credentials.

5. create repository

6. in your local machine build image

`docker build -t brham1980/node_backend:latest .`

7. then push the code
   `docker push brham1980/node_backend:tagname`

### Step 14 - Layers in Docker

Docker layers are a fundamental concept in the architecture of Docker images. Each Docker image is composed of multiple layers, which represent instructions from the Dockerfile. When a Dockerfile is executed, each instruction (e.g., RUN, COPY, ADD) creates a new layer. These layers are stacked on top of each other to form the final image. Here’s a brief explanation with an example

Key Points about Docker Layers:

1. Base Layer: The starting point of an image, typically an operating system (OS) like Ubuntu, Alpine, or any other base image specified in a Dockerfile.

2. Instruction Layers: Each command in a Dockerfile creates a new layer in the image. These include instructions like RUN, COPY, which modify the filesystem by installing packages, copying files from the host to the container, or making other changes. Each of these modifications creates a new layer on top of the base layer.

3. Reusable & Shareable: Layers are cached and reusable across different images, which makes building and sharing images more efficient. If multiple images are built from the same base image or share common instructions, they can reuse the same layers, reducing storage space and speeding up image downloads and builds.

4. Immutable: Once a layer is created, it cannot be changed. If a change is made, Docker creates a new layer that captures the difference. This immutability is key to Docker's reliability and performance, as unchanged layers can be shared across images and containers.

### Why layers?

- If you change your Dockerfile, layers can get re-used based on where the change was made
- Note: If a layer changes, all subsequent layers also change

- You can change your source code.
- you can change the package.json

![Why layers?](./images/Screenshot_2.png)

### Optimising Dockerfile

- let change the docker file a bit.

[change docker file](./images/Screenshot_3.png)

1. We first copy over only the things that npm install and npx prisma generate need

2. Then we run these scripts

3. Then we copy over the rest of the source code

Case 1 - You change your source code (but nothing in package.json/prisma)

![case 1](./images/Screenshot_4.png)

Case 2 - You change the package.json file (added a dependency)

![case 2](./images/Screenshot_5.png)

### Step 15 - Networks and volumes

Networks and volumes are concepts that become important when you have multiple containers running in which you.

Volumes: Volumes allow you to persist data between container restarts. This is useful for storing data that you don't want to lose when a container is stopped or destroyed.

Networks: Networks allow containers to communicate with each other. You can define your own networks in your docker-compose.

1. Need to persist data across docker restarts
2. Need to allow containers to talk to each other

### Step 22 - docker-compose

Docker Compose is a tool designed to help you define and run multi-container Docker applications. With Compose, you use a YAML file to configure your application's services, networks, and volumes. Then, with a single command, you can create and start all the services from your configuration

Docker: Images, Networking, Volumes & Docker Compose - https://medium.com/@mohamed.enn/docker-deep-dive-971535ad8e17#:~:text=Volumes%3A%20Volumes%20allow%20you%20to,networks%20in%20your%20docker%2Dcompose.
