/*
The algorithm is to create a hashmap which stores the last index of occurrece of each character within the string so we can figure out if we can create a split an whether or not we can. next we will loop through the array and set a variable "end" to the max value of either the end value or the last occurrence of the current string we are on. then we set a variable "size" to track the length of characters we have passed while we haven't surpassed the end value we have currently set. when we do get to a value whose last occurrence is equal to our end value then it means for whatever length of characters we hve traversed, all of the characters appear within the "size" variable range up until out end value therefore we can split the string at this point. we then set size to zero and then then set end to the next max value and then keep iterating. if it is impossible to split the string then end will eventually point to the last index of the string
*/
var partitionLabels = function(s) {
    let map = {}

    for(let i=0;i<s.length;i++){
        map[s[i]] = i //loop through all characters to find last occurrence
    }



    let size = 0 //track length of partition
    let end = 0  //track last occurrence
    let result = [] //length of partitions

    for(let i=0;i<s.length;i++){
        size += 1 //increment size on every visit
        end = Math.max(end,map[s[i]]) //set end to the max of either end or the last occurrence of current character

        if(end === i) {
            result.push(size) //if we get to a character whose last occurrence equals our end value then we can partition so we push the size into our result array and set the size to zero to start over
            size = 0
        }

       
    }

    return result
};

console.log(partitionLabels("ababcbacadefegdehijhklij"))