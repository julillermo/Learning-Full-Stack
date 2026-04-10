# Notes:

- About the food finder application:
  - The app lists restaurants, their locations, additional details on click
  - GitHub login
  - Same tech stack as what's covered in part I
  - Use docker-compose.yml
    - 1 service for mongoDb backend (MongoDB image)
      - Will be seeded with starting data.
      - Mongoose is not included in the MongoDB image
    - 1 service for frontend
- The seed script is available via http://­www​.­usemodernfullstack​.­dev​/­downloads​/­assets

# Implementation Notes:

- Will likely use a new and separate Dockerfile to distinguish between part I and Part II of the book
- The food-finder project started with setting up the docker containers via this chapter. Since I followed along with the pnpm docs suggested way to setting up docker for a monorepo, I'll skip this docker setup and work with the project directly into my system.
  - Might want to think about docker only later after finishing the project.
  - Might also want to perform this in PostgreSQL instead (before setting up the docker containers).
