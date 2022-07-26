function climbStairs(n: number): number {
  let a = n;
  let b = 0;
  const results = [];
  while (a >= b) {
    if (b === 0 || a === b) {
      results.push(1)
    } else {
      const waru = kaijo(a, b);
      const warareru = kaijo(b, b);
      results.push(waru / warareru);
    }
    a--;
    b++;
  }
  const total = results.reduce((sum, element) => sum + element, 0)
  return total;
};

/**
 * 
 * @param num 4
 * @param length 2
 */
function kaijo(num: number, length: number): number {
  let a = num;
  let result = 1;
  for (let i = length; i > 0; i--) {
    result *= a;
    a--;
  }
  return result;
}