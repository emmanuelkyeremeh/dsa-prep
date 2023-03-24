var longestPalindrome = function(s) {
    let res = "" //stores the longest palindromic susbstring
    let resLen = 0 //stores length of sustring

    //goal is to find all palindromes and return the one with the biggest length. palindromes can either be of even length or of odd length.loop through all strings and compute even length and odd length substring.

    for(let i=0;i<s.length;i++){
        //odd length palindromes
        let left = i
        let right = i
        //start from the word and then expland using the indexes, so current word becomes the word in the middle. as long as the words l and r are equal,we are getting a palinrome with increasing length

        //if at any point the substring we are getting becomes longer than the length of the existing longest palindromic substring that we have stored then we must update it
        //decrease l because we are moving away from the current character so l goes to the left while r goes to the right so increase r
        while(left >=0 && right<s.length && s[left] === s[right]){
            if(right-left+1 > resLen){
                res = s.substring(left,right+1)
                resLen = right-left+1
            }

            left-=1
            right+=1
        }

        //even length

        //if its even then we can't have one character being at the center. we must have two characters so we set left to be i and right to be i +1 and we perform the exact same computation as we did before

        left = i
        right = i+1

        while(left>=0 && right<s.length && s[left] === s[right]){
            if(right-left+1 > resLen){
                res = s.substring(left,right+1)
                resLen = right-left+1
            }

            left-=1
            right+=1
        }
    }

    return res
};

//time complexity is likely O(N^2) and O(1) space