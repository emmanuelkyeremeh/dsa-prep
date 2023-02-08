//requires revision for deeper understanding
var insert = function(intervals, newInterval) {
  let [start,end] = newInterval; //obtain the values in the interval
  let [prefix,suffix] =[[],[]] //intialize array for prefixes and suffixes as new interval is concerned
  for(let i of intervals){
    if(i[0] > end){
        suffix.push(i) //range is greater than new interval
    }else if(i[1] < start){
        prefix.push(i) //range is less than new interval
    }else{
        //overlapping, so find the upper and lower boundaries
        start = Math.min(start,i[0])
        end = Math.max(end,i[1])
    }
  }
 //now connect everything together
  return [...prefix, [start,end],...suffix]
};