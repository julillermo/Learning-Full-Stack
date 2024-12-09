import { sum } from "../helpers/sum";

describe("the sum function", () => {
  test("two pluse two is four", () => {
    // * Verbose version
    // const first = 2;
    // const second = 2;
    // const expectation = 4;
    // const result = sum(first, second);
    // expect(result).toBe(expectation);

    // * Concise version
    expect(sum([2, 2])).toBe(4);
  });

  test("minus eight plus four is minus four", () => {
    // * Verbose version
    // const first = -8;
    // const second = 4;
    // const expectation = -4;
    // const result = sum(first, second);
    // expect(result).toBe(expectation);

    expect(sum([-8, 4])).toBe(-4);
  });

  test("two plus two plus minus four is zero", () => {
    expect(sum([2, 2, -4])).toBe(0);
  });
});
