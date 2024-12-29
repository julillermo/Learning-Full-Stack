import { sum } from "../helpers/sum";

// it() is an alias for test()

describe("the sum function", () => {
  it("should return 4 when 2 plus 2", () => {
    // * Verbose version
    // const first = 2;
    // const second = 2;
    // const expectation = 4;
    // const result = sum(first, second);
    // expect(result).toBe(expectation);

    // * Concise version
    expect(sum([2, 2])).toBe(4);
  });

  it("should return -4 when -8 + 4", () => {
    // * Verbose version
    // const first = -8;
    // const second = 4;
    // const expectation = -4;
    // const result = sum(first, second);
    // expect(result).toBe(expectation);

    // * Concise version
    expect(sum([-8, 4])).toBe(-4);
  });

  it("should return 0 when 2 + 2 - 4", () => {
    expect(sum([2, 2, -4])).toBe(0);
  });
});
