# Notes:

- Types of software tests mentioned:
  - _Functional Tests_
  - _Integration Tests_
  - _End-to-End Tests_
  - _Snapshot Tests_
- This chapter attempts simulate the process of _test-driven development_ (TDD) for the reader
  - Start with a test file importing a function
  - The details of the function get included later
  - Develop until the test passes.
- 2 types of unit tests:
  - _interaction-based_: verifies that specific functions where called within the function of intestest.
  - _state-based_: check for the return value
- "As a general rule of thumb, you should aim for code coverage of 90 percent or above, with a high coverage for most critical part of your code.
- _Fakes, Stubs, and Mocks_
  - Test should generally run independently of external code. To handle external code, we "spoof" them for thes test run.
- Generally, there is no right or wrong way to test code nor what to include as part of your tests

# Implementation notes:

- Since the book asked to install the `ts-jest` package, it implies that Jest might require more setup for TypeScript? My experience with Vitest feels like it supported TypeScript out of the box, on top of being significantly faster to run.
- Based on my experience, I think vitest might have a different set up for mocks than in jest.
- In Jest, you can specify whether to simulate a `node` environment or the browser environment `jsdom`. This is specified by adding a comment at the start of the test file.

# 2026 Revisit Deviations:

- Will attempt to recreate this in vitest later on
- Given that the examples to go through depended on running tests against MongoDb and Mongoose, I will skip these.
- I encountered an issue with setting up Jest and handling environments, so I will generally forego this and later on try adding tests via vitest
