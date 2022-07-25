function mySqrt(x: number): number {
  let i = 1
  while (true) {
    if (i * i > x) {
      return i - 1
    }
    i++
  }
};