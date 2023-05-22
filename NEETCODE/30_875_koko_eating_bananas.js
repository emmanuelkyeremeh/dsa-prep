/*
So with this problem we have an array of bananas and the  given amount of hours guarranteed to be equal or greater than our array which represents the max amount of hours required to consume every banana in the array so we can't exceed that and we need to find minimum eating speed per hour required to satisfy the max hour requirement. so what we will do is to first list the possible eating speed we can get which will range from 1 - the largest value in the array. then we can perform binary search on the array. we take the midpoint of the array of possible values than can satisfy the max hours and then loop through the banana array while figuring out the total number of hours required to consume every banana, if the total hours exceeds the max requirement, we shift our binary tree to the right to find larger eating speeds or we do the opposite to find smaller eating speeds which could also satisfy the requirment until the left pointer exceeds the right pointer then we return the solution we have
*/
var minEatingSpeed = function (piles, h) {
  let left = 1;
  let right = Math.max(...piles);
  let result = right;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let hours = 0;
    for (let banana of piles) {
      hours += Math.ceil(banana / mid); //obtain the number of hours required to eat this pile and add it to the hours variable
    }

    if (hours > h) {
      left = mid + 1;
    } else {
      result = Math.min(result, mid);
      right = mid - 1;
    }
  }

  return result;
};

//Time (Plog(max(p))) length of piles *logarithm of the array of possibe K values
