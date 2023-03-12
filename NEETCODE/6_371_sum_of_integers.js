/*
For  this problem we want to add two numbers using XOR. but then XOR does not cater for carry. So we need to use AND to get the carry. Then we need to shift the carry to the left by 1 bit. Then we need to XOR the carry with the sum. Then we need to repeat this process until the carry is 0.
*/
var getSum = function(a, b) {
    
    while(b !== 0){
        let temp = (a&b) << 1;

        a = a^b;
        b = temp;
    }

    return a
};