// "The code imports the next/jest package and exports a
//    Jest configuration with the default properties of a
//    Next.js project"

// "It is the simplest form of Next.js-compatible Jest
//    configuration"

const nextJest = require("next/jest");
const createJestConfig = nextJest({});

module.exports = createJestConfig(nextJest({}));

//* ORIGINAL CONTENTS
// /** @type {import('ts-jest').JestConfigWithTsJest} **/
// module.exports = {
//   testEnvironment: "node",
//   transform: {
//     "^.+.tsx?$": ["ts-jest",{}],
//   },
// };
