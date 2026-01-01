# Notes:
- ES.Next modules:
  - `named` and `default` exports. The book suggestt `named` exports as the better practice
- `var`, `let`, `const` and the concept of `block scopes` and `global scopes`
  - Based on my professional experience, avoid `var`
  - `var` makes use of the "hoisting" concept
  - I didn't go into detail during my 2026 revisit, but I recall that the JS `const` isn't a hard CONSTANT declaration. I believe objects or lists can still be altered.
- Concept of "Arrow Functions"
- Concept of "Template Literals"
- Concept of "Asynchronous Scripts"
  - Traditional Callbacks
    - refer to code_example_1 below
    - Multiples of these can lead to what is called "callback hell," especially when the functions are inline and aren't stored as variables.
  - The previous preferred way to handling this was to use "Promises"
    - The `Promise` object has 2 properties:
      - state
      - result
    - The `Promise` objects can be consumed using `then`, `catch`, and `finally` (which can be chained together)
      - This is equivalent to the `try`, `catch`, and `finally` 
    - The prior operation must complete before proceeding with the next.
    - refer to code_example_2
  - Moden JS prefers to address this using `async/await`
    - refer to code_example_3
- Looping Through an Array (using `.map()` method)
- Using the "spread operator" on lists and objects ex. `[...listObj]` and `{...jsObj}`
        
```js
// code_example_1
import { fs } from "node:fs"
const callback = (err, data) => {
  if (err) {
    return console.log("error");
  }
  console.log(`File content ${data}`);
  fs.readFile(" file.txt", callback)
};
```

```js
// code_example_2
function fetchData(url) {
  fetch (url)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => {
      console.error(`Error : ${error}`)
    })
}
fetchData("https://www.usemodernfullstack.dev/api/v1/users")
```

```js
// code_example_3
async function fetchDate(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(`Error : ${error}`);
  }
}
fetchData("https://www.usemodernfullstack.dev/api/v1/users")
```

# 2026 Revisit Deviations:
- Since the runtime is bun instead of node.js:
  - No need to import node-fetch, since bun has implemented the Web-standard `fetch` API for sending HTTP requests
