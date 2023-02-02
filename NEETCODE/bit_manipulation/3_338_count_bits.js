/*
for any odd number, the number of 1s in its binary representation is equal to the number of 1s in the binary representation of the number divided by 2 plus the last bit of the number. For example, 5 = 101, 2 = 10, 5/2 = 2, 5%2 = 1, so the number of 1s in 5 is equal to the number of 1s in 2 plus 1. So, we can use this to our advantage to solve this problem. We can create an array of size n+1 and fill it with 0s. Then, we can loop through the array and for each index, we can check if the index is even or odd. If it is even, then we can set the value of the index to the value of the index divided by 2. If it is odd, then we can set the value of the index to the value of the index divided by 2 plus 1. We can then return the array.
*/
var countBits = function(n) {
    let result = new Array(n+1).fill(0)

    for(let i=1;i<=n;i++){
        if(i%2 === 0){
            result[i] = result[Math.floor(i/2)]
        }else if(i%2 === 1){
            result[i] = result[Math.floor(i/2)] + 1
        }
    }

    return result
};