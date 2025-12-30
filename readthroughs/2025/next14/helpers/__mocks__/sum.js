// * For simulating a STUB dependency double
// const sum = (_data: number[]): number => 999;
const results = {
    "0+0": 0,
    "0+1": 1,
    "1+0": 1,
    "1+1": 2,
    "2+1": 3,
};
const sum = (data) => {
    return results[data.join("+")];
};
export { sum };
