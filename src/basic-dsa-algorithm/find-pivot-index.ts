export function pivotIndex(nums: number[]): number {
  const sumArray: number = nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0
  );

  let sumLeft = 0;
  let sumRight = 0;

  for (const [index, num] of nums.entries()) {
    sumRight = sumArray - sumLeft - num;
    if (sumLeft === sumRight) {
      return index;
    }
    sumLeft+=num;
  }
  return -1;
}