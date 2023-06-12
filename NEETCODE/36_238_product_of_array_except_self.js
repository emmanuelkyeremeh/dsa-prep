/*
This problem is solved in O(N) time and O(N) space. so we want to find the product of all elements at every other index except the one we are currently working on. so to do this, since we can't use divison, we will take the product of all the elements starting from the left towards the right cumulatively while storing the product we get at any point in the index we are currently on until we finish finding the product and this will be done in a new array. we will repeat this computation but starting from the right this time around and then store the product values in place inside of a new array. now we can then loop through each index inside of the nums array and we will find that the product of the value at the index one less than the current index in the left array represents the product of all values to the left of our current index and the value at the index one more than our current index in the right array represents the product of all values to the right of our current index so we can multiply the two and then store it inside of our output array
*/
var productExceptSelf = function (nums) {
  let leftMultiplier = [];
  let rightMultiplier = [];
  let output = [];

  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    product *= nums[i];

    leftMultiplier[i] = product;
  }

  product = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    product *= nums[i];

    rightMultiplier[i] = product;
  }

  for (let i = 0; i < nums.length; i++) {
    let result =
      (leftMultiplier[i - 1] === undefined ? 1 : leftMultiplier[i - 1]) *
      (rightMultiplier[i + 1] === undefined ? 1 : rightMultiplier[i + 1]);

    if (result === -0) result = Math.abs(result);

    output[i] = result;
  }

  return output;
};

productExceptSelf([-1, 1, 0, -3, 3]);
