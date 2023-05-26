/*
the result of rotating a number arranged in ascending order is that you end up shifting the larger numbers right to the start of the array
eg. [1,2,3,4,5] becomes [5,4,1,2,3] when rotated twice

so we can use that to our advantage using binary search in logarthmic time. so when we find the number at the midpoint, since the array has been rotated, it will be split into a left and right section of sorted numbers, both left in descending order and right in ascending so the key is to find which of the splits the current number is in then decide which direction to continue with our binary search. now, if we reach a midpoint and the number happens to be greater than our left most number then the number is in the right split of the array since it has been rotated and the larger numbers are at the leftmost section so we move right. if the number happens to the right split of the array, that means numbers behind will be smaller since its increasing  so we search left. if the leftmost number is less than our midpoint then array is probably sorted
*/
var findMin = function (nums) {
  let res = nums[0];

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] < nums[right]) {
      res = Math.min(res, nums[left]);
      break;
    }

    let mid = Math.floor((left + right) / 2);
    res = Math.min(res, nums[mid]);

    if (nums[mid] >= nums[left]) {
      left = mid + 1; //edge case, if ever mid is at the leftmost element
    } else {
      right = mid - 1;
    }
  }

  return res;
};
