import { 
  runningSum,
  pivotIndex
} from '../basic-dsa-algorithm';

describe ('Running-sum-of-1d-array' ,() => {
  test.each`
    inputArray             | expectedArray
    ${[1,2,3,4]}           | ${[1,3,6,10]}
    ${[1,1,1,1,1]}         | ${[1,2,3,4,5]}
    ${[3,1,2,10,1]}        | ${[3,4,6,16,17]}
  `('Running Sum: If input array is $inputArray, $expectedArray is receieved', ({inputArray, expectedArray}) => {
    expect(runningSum(inputArray)).toStrictEqual(expectedArray);
  });
});

describe ('find-pivot-index' ,() => {
  test.each`
    inputArray                 | expected
    ${[1,7,3,6,5,6]}           | ${3}
    ${[1,2,3]}                 | ${-1}
    ${[2,1,-1]}                | ${0}
  `('Pivot Index: If input array is $inputArray, $expected is receieved', ({inputArray, expected}) => {
    expect(pivotIndex(inputArray)).toStrictEqual(expected);
  });
});