var numDecodings = function (s) {
  let dp = {};

  dp[s.length] = "1";

  for (let i = s.length - 1; i <= 0; i--) {
    if (s[i] === 0) {
      dp[i] = 0;
    } else {
      dp[i] = `${dp[i + 1]}`;
    }

    if (
      i + 1 < s.length &&
      (s[i] === "1" || (s[i] === "2" && "0123456".includes(s[i + 1])))
    ) {
      dp[i] = parseInt(dp[i]) + parseInt(dp[i + 2]);
    }
  }

  return dp[0];

  /*
    this is very similar to past dp solutions so as usual we will have to tackle the sub problems we need to run this code step by step to ensure we understand what is going on here
     
    TEST CASE s="12"
    OUTPUT = 2

    we doing a bottom up approach so we will start from the very last index and work our way up to the first

    at index 1
    the index here is  "2" and not zero, when the string starts from zero, no way is actually possile since no character maps to anything starting with zero so when we encounter zero, we will set that index to zero inside of our dp

    so dp now becomes
    dp = {
        2 : 1, (base case)
        dp[i] (1) : 1
    }

    now i+1 is at s.length so the last if case doesnt hold so we move on to the next index

    now at index 0
    the value is 1 so we set the dp[i] to our previous value at i+1
    so our dp becomes

    dp = {
        2: 1(base case),
        1:1,
        0:1
    }

    now i+1 is less than the length of the string,
    the value at index zero is 1 which means it is either 1 or 2 and for 2, the value at i+1 must range between 0-6 which it does which means we can select double digit ways from our given string so what we do is we add the value at dp[i+2] to dp i since we are selecting double digit numbers so what we get now for our dp becomes

    dp  = {
        2: 1 (base case),
        1: 1,
        0:2
    }

    and we return dp[0] which is done in O(N) time and O(n) space too
    */
};
