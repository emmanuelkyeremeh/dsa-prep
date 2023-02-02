/*
the algorithm here is to use the logical AND and right shifting. with right shifting, you are dividing the number by two or removing the last bit so to check whether the last bit is 1 or 0, you AND it with 1. If it is 1, then you increment the count. You then right shift the number by 1 and repeat the process until the number is 0.
*/
var hammingWeight = function(n) {
  let count = 0
  
   while(n){
    count += n & 1;
    n >> 1;
   }

   return count;
};