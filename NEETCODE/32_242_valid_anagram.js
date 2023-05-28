/*
easy approach would be to sort the strings and simply check for equality (nlogn)
more efficient solution would be to loop through the first string, add the characters and set the value to the number of times it appears in that string inside of the hashmap we create. in the second string, look for these values and decrement them. if the character does not exist, immediately return zero. if both strings have the same occurrence of characters and the same number of characters then looping through the hashmap for the values of the characters in the map will return zero each time hence return true otherwise its false
*/
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let hash = {};

  for (let char of s) {
    if (hash[char]) {
      hash[char] += 1;
    } else {
      hash[char] = 1;
    }
  }

  for (let char of t) {
    if (hash[char]) {
      hash[char] -= 1;
    } else {
      return false;
    }
  }

  for (let value in hash) {
    if (hash[value] !== 0) {
      return false;
    }
  }

  return true;
};
