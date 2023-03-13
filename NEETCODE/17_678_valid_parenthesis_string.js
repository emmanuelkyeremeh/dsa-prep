/*
In this problem we are checking for a valid string with the same type of opening and closing brackets and a wildcard which can either be an opening or closing bracket or even an empty string in order to make the string valid. for this we need two stacks, one to track the opening brackets traversed and the other to track the wildcards traversed. for eacg opening bracket, push the index into the open stack and for each wildcarrd push the index into the star stack. when we encounter a closing bracket, we need an opening bracket to pair with that so we pop from the open stack. if the open stack is empty then pop from the stack stack since the wildcard becomes an opening bracket. if both are empty then the string is invalid thus return false. now if after our traversal, we still have opening brackets inside of our open stack then we need to iterate while it is not empty. we do not care about the number of wildcards left because it can suffice as an empty string. if the wildcard stack is empty and our open stack is not empty then return false because it is invalid. otherwise peek at the the last element of both stacks. if the index of the element in the star stack is greater than that of the open, it means that a closing bracket comes after the open therefore it can be balanced so pop both, if the reverse becomes true then we will return false
o(n) time, o(n) space
*/
var checkValidString = function(s) {
    let open = []  //track the open brackers
    let star = [] //track closed brackets

    for(let i=0;i<s.length;i++){
        if(s[i] === "("){
            open.push(i)
        } else if(s[i] === "*"){
            star.push(i)
        } else{ //value is going to be ")"
            if(open.length){
                open.pop()
            }else if(star.length){
                star.pop()
            }else {
                return false 
            }
        }
        
    }

    while(open.length){
        if(!star.length){
            return false
        } else if(open[open.length-1] < star[star.length-1]){
            open.pop()
            star.pop()
        } else {  //open[open.length-1] > star[star.length-1]
            return false
        }
    }

    return true
};