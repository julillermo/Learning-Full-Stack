# 2025 Passthrough guide

The following notes are how I interpretted the original intention code base created when I first went over the book in 2025.

All applications appear to generally contain the same idea, but recreated based on the structure (ex. full-stack next versus dedicated backend and frontend).

## js-server

- Express server that works by visiting the paths specific in `/src/index.ts` such as the following:
  - `/hello/`
  - `/api/names`
  - `/api/weather/:zipcode`
  - `/api/components/weather`

## React-FE

- React-FE was likely created using one of the vite initialization script variations (e.g. `pnpm create vite my-vue-app --template react-ts`).
- This doesn't do much, from what I can tell. It's likely for demonstrating React. It doesn't connect to js-server or other applications.

## my-app

- Likely created using the next.js initialization script `pnpm create next-app@latest my-app --yes` during end of 2024 or early 2025.
- Primarily used by visiting the `/src/pages` and `/src/pages/api` routes. For example, when running, paste the following paths into your browser:
  - `localhost:3000`
    - `/api`
      - `/names`
      - `/weather/1234`
    - `/components/weather`
    - `/hello`

## next14 / refactored-app

- Was likely used to demonstrate the client & server capabilities of a full-stack framework
- Was likely also used for auth tokens, mongoose, and GraphQL
