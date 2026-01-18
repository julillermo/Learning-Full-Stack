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