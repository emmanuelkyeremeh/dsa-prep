/*
The logic here is that we want to use logical XOR, any number XOR itself will be 0, and any number XOR 0 will be itself. So we can XOR all the numbers in the array, and then XOR all the numbers from 1 to n. The result will be the missing number.
*/
var missingNumber = function(nums) {
    let res = 0
    for(let item of nums){
        res ^= item;
    }

    for(let i=1;i<= nums.length;i++){
        res ^= i;
    }

    return res;
};