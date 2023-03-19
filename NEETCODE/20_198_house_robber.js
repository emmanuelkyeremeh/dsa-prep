var rob = function(nums) {
    //assume array = [rob1,rob2,n,n+1,n+2,n+3,...]
    /*
    our computation is based on the fundamentals of dynamic programming where the building blocks of computations is the use of two subproblems, in this case we can either start robbing from the first or second index.
    */
    let rob1 = 0
    let rob2 = 0

    for(let n of nums){
        //say we are at index 0, we can either do rob 1 and n or just rob 2 since there is no adjacency
        //we need to the find the max of both computations
        let temp = Math.max(rob1+n,rob2)
        rob1 = rob2
        rob2 = temp
    }

    return rob2;
};

/*
keep in mind our computational assumption = [rob1,rob2,n,n+1,...]
running through the code using a testcase of array = [1,2,3,1]

rob1 = 0
rob2 = 0

at n=1, idx = 0

temp = Math.max(rob1+n,rob2) // 1 + 0, esentially the total amount to rob when you are at house 1 is just one since you have only visited house 1 so far. the major problem is when you have visited each house so to solve that we must solve the sub problems which is done by starting from the very first house

at n=2, idx = 1
before we got here we set rob1 = rob2 so rob1 = 0, rob2 = 1
now at index 2, we can either rob only 1 or only 2

temp = Math.max(rob1+n,rob2) rob1 = 0, so we can only rob 2 or rob2, which is 1 so we can only rob 1

at n=3, idx = 2
we set rob1 = rob2 , rob1 = 1
rob2 = temp, rob2 = 2

now we have something very similar to what we have in our computational array
now at index 3, we can either rob 1 and 3, making 4 or we just rob 2

temp = Math.max(rob1+n,rob2) //so we can either rob 1 and 3 or just rob 2

at n=1, idx =3
we set rob1=rob2, rob1 = 2
rob2=temp = 4 (1+3 which is what we got from temp)

at idx 1 we can either rob 1 and 3 or 2 and 1

temp = Math.max(rob1+n,rob2) = so we can either rob (2+1) or rob 1,3 which gives us 4 

so we set rob1=rob2 = 4
and we set rob2 = temp which is 4

since we set ro2 = temp, it means we'll be returing the largest value from our robbery so we return rob2
*/