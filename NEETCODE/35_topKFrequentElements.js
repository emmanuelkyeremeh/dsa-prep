/*
to find the top k frequent elements in O(n) time and O(n) space.  create a hash map to keep track of the number occurrences of every number. then create a 2d array called frequency. then store each number in one of the 2d arrays whose frequence equals its number of occurrences which you will obtain from the count array. now loop through every array in the frequency array starting from the highest index which signifies the more frequeuent elements and then add the elements in each array to your result until your result array equals the k
*/
var topKFrequent = function (nums, k) {
  let count = {};
  let freq = [];
  let result = [];

  for (let i = 0; i <= nums.length; i++) {
    freq.push([]);
  }

  for (let num of nums) {
    if (count[num]) {
      count[num] += 1;
    } else {
      count[num] = 1;
    }
  }

  for (let num in count) {
    let index = parseInt(count[num]);
    freq[index].push(num);
  }

  for (let i = freq.length - 1; i >= 0; i--) {
    for (let num of freq[i]) {
      result.push(num);
      if (result.length === k) return result;
    }
  }
};

console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));
