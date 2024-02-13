var canCompleteCircuit = function (gas, cost) {
  let deficit = 0; //this will record the deficit in fuel whenever we encounter an index where it is impossible to visit the next index to prevent duplicate computation.

  let start = 0; //record the index we are currently starting at. this will stay the same until it is impossible to visit the next index due to a negative value from the computation

  let cal = 0; //calculated value of the available gas minus the cost at the particular point

  for (let i = 0; i < gas.length; i++) {
    cal += gas[i] - cost[i]; //the amount of gas available must exceed or be the same as the distance hence we subtract the distance at i from the gas

    if (cal < 0) {
      start = i + 1;
      deficit += cal; //the amount of fuel required or the negative value recieved from the computation.we are setting this to the deficit so that we do not have to recompute already calculated paths
      cal = 0; //set this to zero so we can start the calculation of the new paths uncharted yet
    }
  }
  if (cal + deficit >= 0) {
    //return the last starting position if the excess fuel exceeds our deficit other wise there exists no solution
    return start;
  } else {
    return -1;
  }
};
