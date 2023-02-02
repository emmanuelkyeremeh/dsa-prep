/*
we want to go through every bit in the number and reverse it so we do that using the usual bit manipulation technique of shifting the bits to the right and then using the bitwise or operator to add the last bit to the result. We can do this 32 times because the number is 32 bits long. We can then return the result.
for the result, we need to make sure that it is unsigned so we can use the unsigned right shift operator to shift the bits to the right 32 times. This will make sure that the result is unsigned.
*/
var reverseBits = function(n) {
    let res = 0;

 for(let i=0;i<32;i++){
     res = res << 1;

     res  = res | (n&1)

     n >>= 1
 }

 return res >>> 0;
};