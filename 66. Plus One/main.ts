function plusOne(digits: number[]): number[] {
  const plus: bigint = BigInt(digits.map(d => d.toString()).join("")) + 1n;
  const result: number[] = [];
  for (const p of plus.toString()) {
    result.push(parseInt(p, 10))
  }
  return result;
};  