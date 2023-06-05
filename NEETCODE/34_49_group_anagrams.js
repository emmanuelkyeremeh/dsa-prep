/*
two words are anagrams if one word can be re arranged to form the other word. so thry must be of the same length and have the same characters and the same frequency of characters which is what the code seeks to check
*/
var groupAnagrams = function (strs) {
  let map = {};
  let result = [];

  for (let str of strs) {
    if (!str.length) {
      if (map["null"]) {
        map["null"].push("");
      } else {
        map["null"] = [];
        map["null"].push("");
      }
    } else {
      let value = str;

      str = [...str].sort().join("");

      if (map[str]) {
        map[str].push(value);
      } else {
        map[str] = [];
        map[str].push(value);
      }
    }
  }

  for (let arr in map) {
    result.push(map[arr]);
  }

  return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
