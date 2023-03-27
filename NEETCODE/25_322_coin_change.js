//0(length of coin array * amount) time
//O(amount) space
var coinChange = function (coins, amount) {
  let dp = Array(amount + 1).fill(amount + 1); //create a dp array and then fill the value at each index with the largest possible value we can attain. numbers will not exceed the amount so we do not need it to set it to anything larger.

  dp[0] = 0; //base case, you need zero coins to get zero amount so..

  for (let i = 1; i < amount + 1; i++) {
    //we are looping through each amount. this to fill up our dp so after the loop we can use our dp array to calculate what the minumum number of coins will be to achieve this amount or whether it will not be possible.

    //for each coin in the coins array, we will check to figure out whether subtracting that coin from our amount gives us a positive value. if it does then we will do the following computation
    //we set the value at that index of our dp array to the minimum value of either the existing value or the value we get when we add 1 (we add one because we are using one coin) to the dp value at that coin (basically the number of coins we have to use when we use that coin)
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
    }
  }

  if (dp[amount] !== amount + 1) return dp[amount];
  return -1;
};
