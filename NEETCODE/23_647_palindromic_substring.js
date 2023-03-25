//the algorithm has already explained in the previous question.
var countSubstrings = function(s) {
    let count = 0

    for(let i=0;i<s.length;i++){
        //odd length palindromes
        let left = i
        let right = i

        while(left >=0 && right < s.length && s[left] === s[right]){
            count += 1
            left-=1
            right+=1
        }

        //even length palindromes
        left = i
        right = i+1

        while(left >=0 && right < s.length && s[left] === s[right]){
            count += 1
            left -= 1
            right +=1
        }

    }

    return count;
};