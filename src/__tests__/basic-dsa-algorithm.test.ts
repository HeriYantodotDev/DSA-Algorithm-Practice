import { 
  runningSum,
  pivotIndex,
  isIsomorphic,
  isIsomorphic2,
  isSubsequence
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

describe ('isomorphic-strings' ,() => {
  test.each`
    s                          | t            | result
    ${'egg'}                   | ${'add'}     | ${true}
    ${'eggs'}                  | ${'add'}     | ${false}
    ${'foo'}                   | ${'bar'}     | ${false}
    ${'paper'}                 | ${'title'}   | ${true}
    ${'turtle'}                | ${'murder'}  | ${false}
    ${'add'}                   | ${'egg'}     | ${true}
    ${'aac'}                   | ${'aab'}     | ${true}
    ${'elephant'}              | ${'edhkgkoa'}| ${false}
    ${'abcdefghijklmno'}       | ${'zyxwvutsrqponab'} | ${true}
    ${'abcdefghijklmnopqrstuvwxyz'} | ${'zyxwvutsrqponmlkjihgfedcba'} | ${true}
    ${'ab'} | ${'aa'} | ${false}
  `('Solution 1: If s = $s, and t = $t", then $result', ({s, t, result}) => {
    expect(isIsomorphic(s, t)).toBe(result); //first solution: using Map
  });

  test.each`
  s                          | t            | result
  ${'egg'}                   | ${'add'}     | ${true}
  ${'eggs'}                  | ${'add'}     | ${false}
  ${'foo'}                   | ${'bar'}     | ${false}
  ${'paper'}                 | ${'title'}   | ${true}
  ${'turtle'}                | ${'murder'}  | ${false}
  ${'add'}                   | ${'egg'}     | ${true}
  ${'aac'}                   | ${'aab'}     | ${true}
  ${'elephant'}              | ${'edhkgkoa'}| ${false}
  ${'abcdefghijklmno'}       | ${'zyxwvutsrqponab'} | ${true}
  ${'abcdefghijklmnopqrstuvwxyz'} | ${'zyxwvutsrqponmlkjihgfedcba'} | ${true}
  ${'ab'} | ${'aa'} | ${false}
`('Solution 2: If s = $s, and t = $t", then $result', ({s, t, result}) => {
  expect(isIsomorphic2(s, t)).toBe(result); //Second solution: using indexOf to map the the index
});
});

describe ('is-Subsequence' ,() => {
  test.each`
    s                          | t               | result
    ${'abc'}                   | ${'ahbgdc'}     | ${true}
    ${'axc'}                   | ${'ahbgdc'}     | ${false}
    ${'acb'}                   | ${'ahbgdc'}     | ${false}
    ${'aaaaaa'}                | ${'bbaaaa'}     | ${false}
  `('Is-Subsequence If s = $s, and t = $t", then $result', ({s, t, result}) => {
    expect(isSubsequence(s, t)).toBe(result); 
  });


});
