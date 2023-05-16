var maxProduct = function (nums) {
  let maxProd = nums[0];
  let prod = 1;

  for (let num of nums) {
    prod *= num;

    if (prod < 0) {
      prod = 1;
    } else {
      maxProd = Math.max(prod, maxProd);
    }
  }

  return maxProd;
};

//unsolved! see you in April/May! dated Tuesday March 28 2023
//Returned, no power -> dated May 15, 2023
