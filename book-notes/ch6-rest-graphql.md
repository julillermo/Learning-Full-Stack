# Notes:

- If UI is a way for humans to comunicate with a program, the API is a way for programs or computers to communicate with each other.
- 2 kinds of APIs:
  - internal
  - third-party
- Private APIs typically have an _API Contract_ that defines how to communicate with it.
- Common variations of HTTP APIs encountered in full-stack development:
  - REST
  - GraphQL
- **REST APIs**
  - Typically respond in JSON or plain-text
  - REST API Specification:
    - Suggested way to document an API is to use the **OpenAPI** format (Linux Foundation). Using either JSON or YAML files, you'd work with a standardized format to desribe an API.
    - The suggested online editors seems to have resricted the use of JSON behind a paywall.
  - RESTful APIs are _stateless_. No state (or information from an interaction is stored)
  - Authentication is usually achieved using _tokens_ passed as part of the HTTP `Authorization` header.
  - HTTP Methods:
    - `GET`
      - retrieve data from a resource
    - `POST`
      - add a new element to a collection.
      - POST is more versatile, but PUT is technically the proper way to update a resource (this is supposedly a common debate among developers)
    - `PUT`
      - overwrite or update an existing resource.
      - Every call updates (overwrites) the resource.
        - A downside to using PUT is that it might clear out the other values when we're only sending the parts of the resource we want updated.
        - This is the expected behavior, but it will still depend on how you've implemented the method
        - Refer to the **PATCH** method if you only want to update specific details of the resource
    - `PATCH`
      - PARTIALLY update an existing resource.
      - Sending only the data that differs from the current dataset
    - `DELETE`
      - delete a resource
  - Book covered basic CURL call (I skipped this)
- **GraphQL APIs**
  - "open source data query and manipulation language for APIs"
  - Also works over HTTP
  - Also return static JSON objects like REST APIs
  - Expose only a single API endpoint (commonly `/graphql`)
  - Exlusively uses only the POST http method.
    - _Queries_ are read operations
    - _Mutations_ covere creating, deleting, and updating data.
  - Only returns 2 HTTP status codes:
    - `500` for when it fails or is unable to proceed
    - `200` for successfull execution
  - **Schema**
    - Also called _typedef_, the GraphQL _schema_ is analogous to REST API's specifications (discussed above).
    - GraphQL schemas are writtein in _Schema Definition Language (SDL)_ as a template literal in JavaScript
      - From what I understand, this very similar to TypeScript's types and interfaces.
      - Alternatively, this also appears to align with the mental model of having zod as a type validator for your API's.
    - How GraphQL is dissimalar to TypeScript types:
      - Has it's own set of types (which may overlap with TS)
      - Exclamation marks placed at the end of a type for _non-nullable_ fields.
      - Lists wrap the type to denot a list of that type (e.g. \[String])
      - The types for GraphQL input and output must be separated into their respective "types" (aren't shared).
      - What's discussed in the book is only the basics:
        - no directives (for caching)
      - **The Resolvers**
        - "... are the functions that implement the schema."
        - When implementing resolvers the first function argument is for the previous resolver object in the resolver chain (e.g. `weather: async (_:any, param: {data: WeatherINterface }) => {...})`)
- **Over-fetching** and **Under-fetching**
  - REST-API always returns that full set of data depending on how it's setup, even the ones you don't need for your use case.
  - Similarly, REST-API response might not include that specific data that you're looking for based on how the API was set up and regardless of whether that piece of information is relevent to the context of the other data.
  - You essentailly just get what you ask for in a flexible way using GraphQL.

# Important implementation notes:

- When installing GraphQL, note that you're likely installing an environment that contains a server and a client.
  - Instead of setting up APIs using a node, bun, or a backend framework, we run our GraphQL endpoitns via GraphQL server.
    - In Next, the Apollo server can be exposed by creating the api endpoint at `/pages/api/endpoint.ts`
    - For a standalone node graphQL server, I assume you might exposes it similarly to something like Express, Hono, or Fastify. (You'd need the [stand alone function](https://www.apollographql.com/docs/apollo-server/getting-started#step-6-create-an-instance-of-apolloserver) to start it instead of the Next specific starting function).
  - I assume that the provided clients are the ideal way to interact with the corresponding server.
- In your _Schema Definition Language_ string, make sure to use `input` instead of `type` when declaring the what values are expected as inputs. If you pass a `type` where `input` is expected, GraphQL will fail to proceed.
- The apollo browser UI client is only available in dev mode.

# Thoughts:

- My initial assumption is that having a single `/graphql` endpoint would make it more prone to attackers.
  - Should still apply authentication
  - Should still apply rate limiting
  - Should still apply CORS
  - Should limit depth of query
  - etc.

# 2026 Revisit Deviations:

- From what I see elsewhere, GraphQL files end with the `.gql` or `.graphql` extension, unlike with my schema files during the 2025 passthrough, which ended with `.ts`. (This isn't strict)
  - The official GraphQL VSCode extension supports syntax highlighting for both
