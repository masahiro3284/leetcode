function plusOne(digits: number[]): number[] {
  const result: number[] = digits.concat();
  let i = digits.length - 1;
  plus(digits, i, result);
  return result;
};

function plus(digits: number[], i: number, result: number[]) {
  console.log("i", i);
  const num = digits[i] + 1;
  console.log(num);
  if (num === 10 && i === 0) { result[i] = 0 }
  else if (num === 10) { result[i] = 0; plus(digits, i - 1, result) }
  else { result[i] = num }
};