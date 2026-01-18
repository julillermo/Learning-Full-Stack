# Notes:

- _Containers_ is a broader term that includes docker (and podman).
  - In Docker (and similar software), you create _Images_ which serve as "blueprints" that containers can run. You can have multiple containers based off the same image.
- Advantages of Docker:
  - greater control for running specific version of software
  - isolated and reproducible environment from main machine
  - (specific to containers versus VMs) runs on a shared host -> smaller size and less memory
- "Containers are isolated from one another and communicate through defined APIs"
  - For deploying to a remote service, this means recreating the docker setup there and spinning it up.
- _Dockerfile_
  - describes the environment that the code will run in (ex. Linux with node.js and mongoDb).
  - Use the `FROM` keyword to use a starting template from an official image.
  - Use the `WORKDIR` keyword to set the working directory INSIDE the docker image.
- Use the `docker image rm <name:version or ID>` cli command to remove an image

# Implementation notes:

- From my experience, installing docker through the official desktop application is the most likely to work out of the box.
- The host machine is the one that runs the docker instances.
- I think it wasn't mentioned but you can run something like `Docker init` to generate the set up files.
- You might want to look at the [pnpm docs recomendation for optimizing for docker](<(https://pnpm.io/docker#example-2-build-multiple-docker-images-in-a-monorepo)>)
  - Given that this makes use of `pnpm deploy` [link](https://pnpm.io/cli/deploy), you'll likely want attach a `"files"` property to each individual sub-package's `package.json` file. Here, you'll specify the files and folders that are strictly included with with the `pnpm deploy` output.
- _Serving the Application from the Docker Container_
  - "Docker containers are running instances of Docker images. You could use the same Docker image to spin up multiple containers, each with a unique name or ID".
  - You can do this either via CLI or via the the Docker desktop application.
- Additional considerations for vite:
  - Vite applications must add a `server` property to it's `vite.cofig.ts` to properly work in a docker image (refer to [example code](#example-code)):
  - The vite app I created using `pnpm create vite` start script includes an "override" in it's `package.json`. Using the monorepo docker setup described by the pnpm docs, I got alerted via the cli, that this should be moved to the root `package.json`.
- **Commands I used:**
  - `docker image build --target <image-name> --tag "<image-tag>" .`
    - example `docker image build --target react-vite --tag "react-vite:22-bookworm-slim" .`
    - Use this to create an image based on the root `Dockerfile`.
    - The value for `--target` comes from pnpm monorepo way of setting up the [Dockerfile](../Dockerfile).
    - I belive the `<image-tag>` allows docker to first search for a local image before attempting to pull from the internet.
  - `docker run --name reactVite_container -p 5173:5173 react-vite:22-bookworm-slim`
    - This creates a container with the given `--name` based on the specified docker image.
    - You also map out the connection via `-p <host_port>:<container_exposed_port>`
    - However, this is only used for first run, you can use this again once a container with the same name already exists.
    - The book recommended a different command, but I prefer this based on what I got from LLM chat.
  - `docker container ls`
    - list active running containers
  - `docker ps -a`
    - list all containers, including those not running.
    - you can get the `container_id` and `container_name` here if you don't want to view them via the Docker Desktop GUI.
  - `docker run <container_id>` or `docker run <container_name>`
    - start an existing container
  - `docker stop <container_id>` or `docker run <container_name>`
    - stop a running container
  - `docker container rm <container_id>`
    - delete a container
  - `docker image rm <image_name>`
    - delete a docker image

# 2026 Revisit Deviations:

- Since I couldn't get the in-memory implementation of mongoDb to run, I will run this against the non-mongoDB Next app I created.
- I also inlcuded just the 2026 revisit as part of the docker image (or at least I tried to.)
- I set up my entire `Learning-Full-Stack` project via pnpm workspaces, but I wanted to create a container for `/passthroughs/2026/next-graphql/` as if it's not part of the workspace.
  - From what I understand from the [pnpm docs on this](https://pnpm.io/docker#example-2-build-multiple-docker-images-in-a-monorepo), It would be better to have a single docker file at the root and work with the root `pnpm-workspace.yaml` file.
    - The above references the `pnpm deploy` [link](https://pnpm.io/cli/deploy) and `pnpm install --frozen-lockfile` [link](https://pnpm.io/cli/install) commands.
  - I think this is because pnpm monorepo/workspace projects are built in a specific way that considers all the sub-applications.
    - From what I understand what the documentation describes, I should have a build step and then specify the instructions for each sub-app (including copying what it needs from the build-step). Refer to the example code as well as the project [dockerfile](../Dockerfile)
- There's some additional considerations such as being able to share or restrict file access via volumnes, but I didn't go over this.

# Example code

```ts
// Additional vite.config.js config for docker images
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
    },
  },
});
```

```Dockerfile
FROM node:22-bookworm-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
COPY . /home/node/
WORKDIR /home/node/
# The install & build steps are shared accross applications
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --no-frozen-lockfile

# Uncomment the below if the applications depend on each other
#   and you want a single build command
RUN pnpm run -r build

# Ideally use the above command for an all encompasing build.
# I only specified below, to speed up the build process (knowing they don't depend on other apps)
# RUN pnpm --filter=next-graphql run build
# RUN pnpm --filter=react-vite run build

RUN pnpm deploy --filter=next-graphql --prod /prod/next-graphql
RUN pnpm deploy --filter=react-vite /prod/react-vite

# The ones below must be specified when running the create docker image command:
# docker image build --target react-vite --tag "react-vite:22-bookworm-slim" .

FROM base AS next-graphql
COPY --from=build /prod/next-graphql /prod/next-graphql
WORKDIR /prod/next-graphql
EXPOSE 3102
CMD ["pnpm", "run", "start"]

# NOTE: couldn't get this to work, possibly versions/dependency reasons
# build separately as it's own image (separate terminal command)
FROM base AS react-vite
COPY --from=build /prod/react-vite /prod/react-vite
WORKDIR /prod/react-vite
EXPOSE 5173
# technically vite should be "served" instead of being ran as a vite dev server
CMD ["pnpm", "run", "dev"]
```
