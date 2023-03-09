/*
triplets = [[a,b,c],[a,b,c]] always length 3 and so is target

The goal is to figure out whether not not for all arrays in the triplet array, we can take two arrays and find the max value of each such that the new array we get is equal to the target array. if the two arrays we are comparing contain a value that is greater then the target at that particular index then the value we get at that index when we take the max will always be greater than the target value so we will ignore that array. otherwise we want to search through each array inside of the triplets. when we find a value at any index which is equal the value at the same index in target, then we knowt that we can get an array with the value at that index being the same as that in target. so if we can do this for all three indexes then a solution can be found and we return true
*/
var mergeTriplets = function(triplets, target) {
  let good = new Set() //enumerate whether we have found matching numbers at each position so we can get target

  for (let item of triplets){
    //if item at any index is greater than the value at the same index for target then continue
    if(item[0] > target[0] || item[1] > target[1] || item[2] > target[2]){
        continue;
    }
    //if not then check the values at each index to see if we get a value which is the same as the value at the same index in target, if it is then add that index to the set
    for(let i=0;i<item.length;i++){
        if(item[i] === target[i]){
            good.add(i)
        }
    }
  }
  //if the length is 3 then we found equal values in all indexes hence we will return true
  return good.size === 3
};