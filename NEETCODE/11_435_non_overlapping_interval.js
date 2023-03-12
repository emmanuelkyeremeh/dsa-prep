/*
The logic here is to find the smallest number of intervals to remove from the list such that, no intervals overlap. the algorithm is to go through the list of items while setting the very first interval as our reference. remember to sort before doing this. now check whether the reference interval and the interval we are on overlap. if they don't then update our reference with the current interval. if they do then increase the count and then set the reference to the value with the smallest end of the interval to get rid of the interval with the largest end value since that is more likely to overlapp with other intervals
*/
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])

    let prevInterval = intervals[0]
    let res = 0

    for(let i=1;i<intervals.length;i++){
        if(intervals[i][0] >= prevInterval[1]){
            prevInterval = intervals[i]
        }else{
            res+= 1
            prevInterval = Math.min(prevInterval[1],intervals[i][1])
        }
    }

    return res
};