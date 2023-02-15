/*
The algorithm here is very simple. so from any index we are a given a value which represents the number of jumps we can make out of that index into subsequent indexes. the goal is to make it to the final index. now we have to ensure that we do not land on an index which won't give us a pathway to the final index. if that cannot be done then we return false. the algoirthm is to create a variable, assign it to zero, it will track, out of all the indexes we have gotten to, the farthest possible path that we have been able to reach so far. now for each index add the index and the number of jumps and if it is greater than reachable then we update it. if the index on its own is greater than reachable then it means we are at an index that cannot be reached therefore we must enter zero
*/
var canJump = function(nums) {
    let len = nums.length;

    if(len === 1) return true

    let reachable = 0


    for(let i=0;i<len;i++){
        if(reachable < i) return false

        reachable = Math.max(reachable, nums[i] + i)
    }

    return true
};