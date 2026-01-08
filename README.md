# Learning-Full-Stack

My attempt to follow along with the [The Complete Developer book (No Starch Press)](https://nostarch.com/complete-developer).

For documentation files, kindly refer to:

- [Improvements wishlist](/docs/improvements-wishlist.md)
- [Known issues](/docs/known-issues.md)

Highly recommend frequently visiting [Humble Bundle Books](https://www.humblebundle.com/books) for the opportunity to acquire programming books at discounted prices.

**Outline:**

1. [Planned improvements for 2026 revisit](#planned-improvements-for-my-2026-revisit-and-continuation)
2. [2025 passthrough guide](#2025-passthrough-guide):
   - [js-server](#js-server)
   - [React-FE](#react-fe)
   - [my-app](#my-app)

**Technologies / packages touched on (to varying degrees) during the 2026 revisit:**

- Bun
- Biome
- Concurrently
- Fastify
- GraphQL (via Apollo)
- Hono
- Next
- Node
- Rimraf
- TanStack
  - Start
  - Query
- Typescript
- Zod (@hono/zod-validator)

# Planned improvements for my 2026 revisit and continuation:

- [ ] Revisit the applications created in 2025, but skip the part that includes GraphQL and MongoDb for when I will go over them again in the book.
- [ ] Continue the read through of the book up to Part II. From what I recall, my 2025 pass of the book only covered Part I and only lightly touched on Part II where book covers creating "The Food Finder" Application.
- [ ] Recreate the "The Food Finder" application using a different stack, and possibly diverge from the book and continue it as it's own standalone project.
- [ ] Current technology stack wishlist:
  - [Biome](https://biomejs.dev/)
  - [Bun](https://bun.sh/)
  - [Hono](https://hono.dev/)
  - [OpenAuth](https://openauth.js.org/)
  - [Podman](https://podman.io/)
  - [SQLite](https://sqlite.org/index.html)
  - [TanStack Start](https://tanstack.com/start/latest) or [Astro.js](https://astro.build/)
    - Went with TanStack Start since the concepts apear to be more trasnferable given that Astro is primarily for SSG, which is more ideal for marketing sites/pages. Will try my best to pick up Astro later, though!
    - <mark>Will pick this up later after I've gone through more of the changes to be made to the next application.</mark>
    - Might also want to learn this separately as it's own repo ([Learning-Tanstack](https://github.com/julillermo/Learning-TanStack))
  - [tRPC](https://trpc.io/)
  - [Vite](https://vite.dev/)
  - [Vitest](https://vitest.dev/)
- [ ] To prepare for the above, I plan to already attempt to recreate the examples provided in the book with the above stack in my 2026 revisit, where possible.

A more complete list of potential ideas to pick up can be found in the [Improvements wishlist](/docs/improvements-wishlist.md) docs.

# 2025 Passthrough guide

The following notes are how I interpret (in 2026) the original intention of the parts of the code base created when I first went over the book in 2025. It may not 100% accurate and may still evolve over time.

Generally, all applications appear to contain the same idea, but recreated depending on the structure (ex. full-stack next versus dedicated backend and frontend).

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
