/*
Using a dynamic programming approach, we want to find the number of paths to reach said number of staircases but we need to use a bottom up approach because for each number of staircases, the number of ways depends of the previous and the one before that since we can either take a single step or multiple steps. for those two, we already have their solutions in ou dp array so we just sum them to get our answer.
*/
var climbStairs = function(n) {
    let dp = new Array(n+1)

    dp[0] = 1  //we require only one way to get to the zeroth step which is that we must not move at all
    dp[1] = 1  //we require one way to get to the first step so we can only move once

    for(let i=2;i<=5;i++){
        dp[i] = dp[i-1] + dp[i-2] //for each subsequent number of steps we just add the answers to the last two sub problems which are based on previous solutions
    }

    return dp[n] //return the final answer for the n number of stairs
};