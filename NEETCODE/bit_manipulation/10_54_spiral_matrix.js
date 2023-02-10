//complexity Time O(R*C) SPACE O(N)
var spiralOrder = function(matrix) {
    //assign four pointers to the matrix to help with spiral computation
    let left = 0
    let right = matrix[0].length-1
    let top = 0
    let bottom = matrix.length-1

    //create a  variable called direction to control movement as follows:
    // 0 => left to right
    //1 => top to bottom
    //2 => right to left
    //3 => bottom to top
    let direction = 0
    //create an array to store our solution
    let result = []
    //do this while boundaries intersect
    while(left<=right && top<=bottom){
        //make a traversal from left to right as specified
        if(direction === 0){
            for(let i=left;i<=right;i++){
                result.push(matrix[top][i])
            }
            top++
        }else if(direction === 1){
           //traverse from top to bottom 
            for(let i=top;i<=bottom;i++){
                result.push(matrix[i][right])
            }
            right--
        } else if(direction === 2){
          //traverse from right to left  
            for(let i=right;i>=left;i--){
                result.push(matrix[bottom][i])
            }
            bottom--
        }else if(direction === 3){
            //traverse again from bottom to top to complete the spiral
            for(let i=bottom;i>=top;i--){
                result.push(matrix[i][left])
            }
            left++
        }

        direction = (direction+1)%4 //do this so we keep going from one to four and then start over
    }


    return result;
};