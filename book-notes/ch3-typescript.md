# Notes:

- Weaknesses of JavaScript:
  - weakly typed (can convert types into one another)
  - dynamically type (types aren't explicitly stated on variable initialization)
  - troublesome when handling third-party APIs (due to lack fo strict types)
- Being a _statically_ type language, TypeScript performs type checks before runtime via the code edotor or IDE.
  - The introduction of [ts-go](https://devblogs.microsoft.com/typescript/typescript-native-port/) should make this step a whole lot faster when it releases in Typescript 7.0.
  - Even when you're just using JS, you still using TypeScript via VSCode. However, I'm not sure how this is done in other IDEs and code editors.
- TypeScript _transpiles_ the `.ts` files into the equivalent `.js` code depending on your `tsconfig.json`.
  - Auto-generate a `tsconfig.json` (which can be modified later using the `tsc -init` command after running `npm install -D typescript`)
- Generally, install TypeScript as a devDependency.
- I skipped the "Built-in Types" section as I believe I should have some base knowledge if this from my professional experience.
- Generally skipped over "Custom Types" as well:
  - From what I recall `interface` is like `types`, but can be modified later on using the same interface name.

# 2026 Revisit Deviations:

- I already created a [hono-server](../passthroughs/2026/hono-server/src/index.ts) in Bun, I attempted to create a [fastify-server](../passthroughs/2026/fastify-server/src/index.ts) to demonstrate the use of types.
  - Set it up to run hot-module reloading using [concurrently](https://github.com/open-cli-tools/concurrently/tree/main), `tsc --watch`, and `node --watch`.
  - I ginored that recommended TypeScript compiler options for one that's more aligned with what `tsc -init` generated.
  - The example for using `.d.ts` files is located here as well as the [hono-server](../passthroughs/2026/hono-server/src/index.ts).
- Fastify specific learning:
  - Parameter types are explicitly declared as part of the HTTP command refer to code example 1.

# Code examples:

```js
// code_example_1
type Params = {
  zipcode: string,
};
fastify.get <
  { Params: Params } >
  ("/api/weather/:zipcode",
  async (request, _reply) => {
    const { zipcode } = request.params;
    let response = routeWeather({ zipcode });
    return response;
  });
```
