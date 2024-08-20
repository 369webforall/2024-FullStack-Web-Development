# CI and CD

### What is CI and CD?

`Continuous Integration`

-Continuous Integration (CI) is a development practice where developers frequently integrate their code changes into a shared repository, preferably several times a day. Each integration is automatically verified by

1. Building the project and

2. Running automated tests.

This process allows teams to detect problems early, improve software quality, and reduce the time it takes to validate and release new software updates.

`Continuous Deployment`

As the name suggests, deploying your code continuously to various environments (dev/stage/prod)

### CI/CD Architecture using Docker

![CI/CD Architecture using Docker](./images/CI-CD-Architecture-using-Docker.ppm)

- clone the repo
- Dockerize it
- Push it to the dockerhub
- Push it to the EC2 machine or any hosting

note: Last step keeps changing based on where you’re pushing your image

How to create a CI/CD pipeline?
