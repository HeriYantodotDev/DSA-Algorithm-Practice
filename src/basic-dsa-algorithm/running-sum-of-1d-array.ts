export function runningSum(nums: number[]): number[] {

  let sum = 0;
  const output:number[] = [];
  for (const num of nums) {
    sum+=num;
    output.push(sum);
  }

  return output;
}