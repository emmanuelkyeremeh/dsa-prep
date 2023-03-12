/*
the algorithm here is to create a sort of sliding window technique. we want the maximum sum but we want to avoid negatives. so we will loop through the array and keep track of the current sum and max sum. if at any point our current sum becomes a negative number, we set it to zero and out sliding window resets, otherwise we just keep adding numbers to it
*/
var maxSubArray = function(nums) {
    let maxSum = nums[0]
    let curSum = 0

    for(let num of nums){
        if(curSum < 0){
            curSum = 0
        } 
            curSum += num
            maxSum = Math.max(maxSum,curSum)
        
    }

    return maxSum
};