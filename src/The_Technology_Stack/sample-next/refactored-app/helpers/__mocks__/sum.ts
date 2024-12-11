// * For simulating a STUB dependency double
// const sum = (_data: number[]): number => 999;

// * For simulating a FAKE depedency double
// const sum = (data: number[]): number => {
//   // This should simulate the developer's best attempt at
//   //    simplifying the original function to achieve the
//   //    same result as if it were the original
//   return data[0] + data[1];
// };

// * For simulating a MOCK dependency double
type resultMap = {
  [key: string]: number;
};
const results: resultMap = {
  "0+0": 0,
  "0+1": 1,
  "1+0": 1,
  "1+1": 2,
  "2+1": 3,
};
const sum = (data: number[]): number => {
  return results[data.join("+")];
};

export { sum };
