let string = "1";
let number = 1;
let result;

const calculate = (a: any, b: any) => {
  const aIsInteger = Number.isInteger(a);
  const bIsInteger = Number.isInteger(b);
  if (!aIsInteger) {
    throw new Error("Invalid type: a parameter is not an integer");
  } else if (!bIsInteger) {
    throw new Error("Invalid type: b parameter is not an integer");
  } else {
    return a + b;
  }
};

result = calculate(number, number);
console.log("value: ", result, " type of ", typeof result);

result = calculate(number, string);
console.log("value: ", result, " type of ", typeof result);
