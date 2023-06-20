/*
To find the longest consecutive sequence, what you want to do is to create a set from all of the array elements and then loop through all of the array elements. now to figure out whether a number starts a sequence, just check whether its left element (num -1 ) exists in the set. if it does then we have a sequence. so for that number which starts the sequence, we want to loop through the set checking for whether a number greater than the start of the sequence exists in the set. if it does then we increase our length value and keep checking until we get the length of that sequence. we will do this for each sequence we find and then we return the largest sequence
*/
var longestConsecutive = function (nums) {
  let numSet = new Set(nums);
  let longest = 0;

  for (let num of nums) {
    if (!numSet.has(num - 1)) {
      let length = 1;

      while (numSet.has(num + length)) {
        length += 1;
      }

      longest = Math.max(length, longest);
    }
  }

  return longest;
};

//TIME O(N) SPACE O(N)
