/*
The algorithm here is to use the logical XOR operator. The principle is that a number XOR that same number is zero and that number XOR another number is the same number. So if we XOR all the numbers in the array, the result will be the number that appears only once.
x^0 = x
X^X= 0
*/
var singleNumber = function (nums) {
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    res ^= nums[i];
  }

  return res;
};
