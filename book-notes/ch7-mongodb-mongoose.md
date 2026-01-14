# Notes:

- "Querying \[directly] by using the database's API tends to be clumsy because it usually requires a good amount of boilerplate code, even to simply establish and maintain a connection."
  - Technically, MongoDB has the MongoDB Query Langauge, but because we will use an ODM, there's no need to learn it here.
  - Why we use ORMs or ODMs as middleware between the database and our programming language of choice.
  - Handling and maintaining connections is a primary concern.
- MongoDB is schema-less. (have to be defined separately?)
- **Relational** vs **Non-Relational Databases**
  - Relational:
    - PostgreSQL
    - MySQL
  - Non-relational database / NoSQL
    - MongoDB (document database)
    - Redis (key-value storage)
    - Memcached (key-value storage)
    - Neo4j
- MongoDB uses _BSON_: binary representation of a JSON object.
- Rough translation bewteen MongoDB and SQL:
  - fields -> columns
  - documents -> rows
  - records -> SQL table
- **Querying the Database**
  - "A _service_ is a function that performs the actual CRUD operations the Mongoose model adn returns the result
    - If I'm going off of my professional developer experience, a services or service functions are the ones that carry more specific data manipulations/preperations on top of the usually ORM-to-database CRUD commands (`find`, `list`, `create`, `update`, `delete`, etc.)
  - "Mongoose automatically queues the commands and executes them, maintains the connection, and then processes the queue as soon as there is a connection to the database.
- _Seeding_ the database is for adding additional datasets.

# Implementation notes:

- The book uses **MongoDb in-memory implementation** instead of a real database server.
  - Book mentions that this okay for testing but not for deploying to prod (resets when restarts).
  - The full MongoDB server will be used in the project part of the book.
- Similar to GraphQL types, Mongoose can have it's own set of custom types.
  - This is also reminiscent of PostgreSQL having a somewhat different selection of types from what's available in TypeScript.
- Defining the interface is so that the type checker can double check the types. The schema + model declarations is for MongoDb to understand the types and how to operate on the data.
- For in-memory implementation of MongoDB, the URI is static, but this would be constant for the full MongoDB server implementation.
- Generally, since I'm using an ODM (similar to ORM), most of the implementation of services functions appear just like it would with PostgreSQL/TypeORM.

# 2026 Revisit Deviations:

- The in-memory implementation of mongoDb didn't work for me because of a timeout issue. I will move forward for now as if it worked. I am anticipating that a full mongoDB server implementation (to be covered later in the book), would not have this issue, or could be more manageable for me at a later time.
- I stopped around **Exercrise 7: Connect the GraphQL API to the Database**. The general idea goes:
  - add the database connection to the next api handler logic
  - update the GraphQL resolvers to return data that's pulled from the MongoDb in-memory implementation instead of the way it pulled from a static JS/TS variable.
- <mark>Given that my attempt to recreate the in-memory mongoDB didn't work, I will proceed with the project using the static `next-graphql` application.</mark>
