/*
The algorithm is to first transpose the matrix and then reverse each row. Now to do this visit every row, that is visit every array of the 2d array and then for each array loop through the array or corresponding column and swap the elements with the idexes. then reverse each array in the 2d array to obtain the solution.
*/
var rotate = function(matrix) {
    
    for(let rows = 0;rows<matrix.length;rows++){
        for(let cols=rows;cols<matrix[0].length;cols++){
            [matrix[rows][cols], matrix[cols][rows]] = [matrix[cols][rows], matrix[rows][cols]]
        }
    }

    for(let row of matrix){
        row.reverse()
    }

    return matrix
};