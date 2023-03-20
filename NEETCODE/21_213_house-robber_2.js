/*
This problem is very similar to house robber 1 where we are trying to figure out the largest possible amount we can rob without alerting the police but in this instance we are hit with an edge case where the first house and the last house are nighbours so we can rob either one but not both so we need to find the maximum value we can obtain from either borrowing from one or the other. another egde case is when there is only one element in the array so we need to find the max of that one element and then robbing from either the first or last element to beat  that edge case
*/
var rob = function(nums) {
const helper = (arr) => {
    //code as explained in house robber 1
    //consider [rob1,rob2,n,n+1]
    let rob1 = 0
    let rob2 = 0

    for(let n of arr){
        let temp = Math.max(rob1+n,rob2)
        rob1 = rob2
        rob2= temp
    }
    return rob2 //gives us max value
}
let len = nums.length

 
return Math.max(nums[0], helper(nums.filter((number,index) => index != len-1)), helper(nums.filter((number,index) => index > 0))) //returns max value
};