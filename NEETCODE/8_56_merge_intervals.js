/*
TIME nlog(n), space O(n)

sort the intervals by the starting point. add the first interval to the result array. compare the end of the last element of the final interval in the result array with the beginning of the current interval we are on. if the one in result is greater then replace the end of that interval in result with the largest of either the exisitng interval in rsult or the interval we are curently comparing otherwise just add that interval into result
*/
var merge = function(intervals) {
    let result = []

    intervals.sort((a,b) => a[0] - b[0])

    result.push(intervals[0])

    for(let i=1;i<intervals.length;i++){
        if(result[result.length-1][1] >= intervals[i][0]){
            result[result.length-1][1] = Math.max(intervals[i][1], result[result.length-1][1])
        } else{
            result.push(intervals[i])
        }
    }

    return result
};