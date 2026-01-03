# Notes:

- React is a _declarative_ programming paradigm (in contrast to _imperative_ programming).
- React interface components are _reactive_.
  - Handle own isolated state
  - Updates the page HTML once there is a state change.
- DOM operatoins, such as rerendering a component, are expensive.
  - To side-step this, React uses a _virtual DOM_
  - React calculates the difference between the actual DOM and the virtual DOM to determine what to update
- Setting up React without an init script involves "advnaced setip with a complete build toolchain."
  - "..., the manual process for setting up React is quite complex"
  - The book recommends `create-react-app`, but will go with `vite` instead
- "Note that the elements you create aren't browser DOM elements. Instead, they're plain JavaScript objects that will be rendered, using React's `render` function, to the virtual DOM's root element and then attached to the borwser DOM."
- "React elements are _immutable_". React replaces elements when a change occurs

# 2026 Revisit Deviations:

- Use `vite` over `create-react-app`
  - It appears that creating a front-end isn't covered here. This was mainly for discussion?
- Skipped "Writing Class Components" section
- SKipped the basics that are taught via the official React website (useState, useEffect, etc.)
- The book wanted to try out manually setting up React via babel.js CDN. I skipped this part as well.
