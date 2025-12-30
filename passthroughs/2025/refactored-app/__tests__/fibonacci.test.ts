import { fibonacci } from "../helpers/fibonacci";

// This unit test is using a dependency double imported below
// Call the JEST dependency double from the __mocks__ folder
jest.mock("../helpers/sum");

describe("The fibonacci sequence", () => {
  test("with a length of 0 is ,", () => {
    expect(fibonacci(0)).toBe("");
  });

  //* For when the dependency double is a STUB of () => 999;
  // test("with a length of 5 is '0, 1, 1, 2, 3' ", () => {
  //   expect(fibonacci(5)).toBe("999, 999, 999, 999, 999");
  // });

  //* For when the dependency double is a FAKE or MOCK fn
  test("with a length of 5 is '0, 1, 1, 2, 3' ", () => {
    expect(fibonacci(5)).toBe("0, 1, 1, 2, 3");
  });
});
