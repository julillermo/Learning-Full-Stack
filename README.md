# Learning-Full-Stack

My attempt to follow along with the [The Complete Developer book (No Starch Press)](https://nostarch.com/complete-developer).

For documentation files, kindly refer to:

- [Improvements wishlist](/docs/improvements-wishlist.md)
- [Known issues](/docs/known-issues.md)

Highly recommend visiting [Humble Bundle Books](https://www.humblebundle.com/books) to acquire programming books at discounted prices.

**Outline:**

1. [Planned improvemnts for 2026 revisit](#planned-improvements-for-my-2026-revisit-and-continuation)
2. [2025 passthrough guide](#2025-passthrough-guide)

# Planned improvements for my 2026 revisit and continuation:

- [ ] Continue the read through of the book up to Part II. From what I recall, my 2025 pass of the book only covered Part I and only lightly touched on Part II where book covers creating "The Food Finder" Application.
- [ ] Reacreate the "The Food Finder" application using a different stack, and possibly diverge from the book and continue it as it's own standalone project. Current technology stack wishlist
  - [Bun](https://bun.sh/) or [Deno](https://deno.com/)
  - [Vite](https://vite.dev/)
  - [Vitest](https://vitest.dev/)
  - [Astro.js](https://astro.build/)
  - [SQLite](https://sqlite.org/index.html)
  - [Hono](https://hono.dev/)
  - [Podman](https://podman.io/)
  - [Biome](https://biomejs.dev/)
  - [OpenAuth](https://openauth.js.org/)
- [ ] To prepare for the above, already attempt to recreate the examples provided in the book with the above stack where possible. I am somewaht already familiar with some concepts or technologies through my experience at work, and I may safely give them less emphasis.

A more complete list of potential ideas to pick up can be found in the [Improvements wishlist](/docs/improvements-wishlist.md) docs.

# 2025 Passthrough guide

The following notes are how I interpret (in 2026) the original intention of the parts of the code base created when I first went over the book in 2025. It may not 100% accurate and may still evolve over time.

Generally, all applications appear to contain the same idea, but recreated dependeing on the structure (ex. full-stack next versus dedicated backend and frontend).

## js-server & React-FE

- I believe these two are meant to be ran together through the use of something like `concurrently`.

## my-app

- Likely created using the next initializtion script `pnpm create next-app@latest my-app --yes` during end of 2024 or early 2025.
- Primarily used by visiting the `/src/pages` and `/src/pages/api` routes. For example, when running, paste the following paths into your browser:
  - `localhost:3000`
    - `/api`
      - `/names`
      - `/weather/1234`
    - `/components/weather`
    - `/hello`
