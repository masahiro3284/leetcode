function removeDuplicates(nums: number[]): number {
  let l = 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[l] = nums[i];
      l++;
    }
  }
  return l;
};