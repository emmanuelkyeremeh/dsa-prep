/*
To find the min cost of climbing stairs, the major problem depends on the result of the two sub problems before it. so basically we have to find the min cost of climbing for either index zero or one so for each point, finding the minimum will depend on the cost in the two values after it. from the last index before the top step, obviously it will equal the existing value at that index and the one after can either equal its value + the next value if you take one step or the value at that index of you take two steps, and as you move backwards we will keep utlizing the cost when you get to each index until we finally fill the total minimal cost starting at index 0 and 1
*/
var minCostClimbingStairs = function(cost) {
   cost.push(0) //push this in to make the math work


   for(let i=cost.length-3;i>=0;i--){
    cost[i] = cost[i] + Math.min(cost[i+1],cost[i+2]) //we are setting the value at each index for the minimal cost when we take either one or two steps
   }

   return Math.min(cost[0],cost[1]) //we return the smallest value from jumping from either 1 or 2
};