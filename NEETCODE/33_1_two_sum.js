/*
we want to find the two numbers in an optimal manner. if the two numbers sum up to target, then it means that target minus one of the numbers equals the other. so in one pass we can subtract the number at the current index from target and check whether the result exists inside of our hashmap. if does then we return that index and the current index.. if it doesnt then we add the number we are currently on and its index to the hashmap and keep looking
*/
var twoSum = function (nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let res = target - nums[i];

    if (map[res] >= 0) {
      return [i, map[res]];
    }

    map[nums[i]] = i;
  }
};
