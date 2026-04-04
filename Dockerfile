# ===== CREATE A BASE =====
# starts a build stage named base using the official Node 22 image on Debian Bookworm (slim variant) as the foundation.
FROM node:22-bookworm-slim AS base 
# sets an environment variable pointing to where pnpm will install itself within the container file syste.
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# The below can alternatively be the following if you'd prefer corepack: 
# RUN corepack enable
RUN npm install -g pnpm@10.18.2


# ===== CREATE SHARED RESOURCE =====
# The install & build steps are shared accross applications
FROM base AS build
# Copy entire project to /home/node/ and set it as the working directory.
COPY . /home/node/
WORKDIR /home/node/
# --mount is a Docker BuildKit feature for specifying cache. It has to be called before pnpm install on the same RUN line.
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --no-frozen-lockfile


# ===== BUILD & DEPLOY APPS (to docker container) =====
# Uncomment the below if the applications depend on each other
#   and you want a single build command
# RUN pnpm run -r build

# Ideally use the above command for an all encompasing build.
# I only specified below, to speed up the build process (knowing they don't depend on other apps)
RUN pnpm --filter=next-graphql run build
RUN pnpm --filter=react-vite run build

# These create standalone builds accounting for interdependency within the pnpm workspace, from what I understand.
# The pnpm deploy command also already includes the build output
RUN pnpm deploy --filter=next-graphql --prod /prod/next-graphql
RUN pnpm deploy --filter=react-vite --prod /prod/react-vite


# The variable names following AS below must be specified when running the create docker image command:
#   docker image build --target react-vite --tag "react-vite:22-bookworm-slim" .
# Note that the following are trying to refer to the /prod/next-graphql generated during the build stage.

# build separately as it's own image (separate terminal command) unless you're using docker compose
FROM base AS next-graphql
COPY --from=build /prod/next-graphql /prod/next-graphql
WORKDIR /prod/next-graphql
EXPOSE 3102
CMD ["pnpm", "run", "start"]

# build separately as it's own image (separate terminal command) unless you're using docker compose
FROM base AS react-vite
COPY --from=build /prod/react-vite /prod/react-vite
WORKDIR /prod/react-vite
EXPOSE 5173
CMD ["pnpm", "run", "serve"] 