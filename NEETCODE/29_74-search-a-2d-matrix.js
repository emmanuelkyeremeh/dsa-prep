/*
This is a classic binary search question. we want to utilize binary search to figure out which row exactly we can find our number and then we perform binary search on that row to find said number
*/
var searchMatrix = function (matrix, target) {
  //identify the exact row using binary search
  let idx;
  let i = 0;
  let j = matrix.length - 1;

  while (i <= j) {
    let mid = Math.floor((i + j) / 2);
    let len = matrix[mid].length;

    if (target > matrix[mid][len - 1]) {
      i = mid + 1;
    } else if (target < matrix[mid][0]) {
      j = mid - 1;
    } else if (target > matrix[mid][0] && target < matrix[mid][len - 1]) {
      idx = mid;
      break;
    } else if (target === matrix[mid][0] || target === matrix[mid][len - 1]) {
      return true;
    } else {
      return false;
    }
  }

  if (idx === undefined) {
    return false;
  }

  //now run binary search to find the number
  i = 0;
  j = matrix[idx].length - 1;

  while (i <= j) {
    let mid = Math.floor((i + j) / 2);

    if (target > matrix[idx][mid]) {
      i = mid + 1;
    } else if (target < matrix[idx][mid]) {
      j = mid - 1;
    } else if (target === matrix[idx][mid]) {
      return true;
    } else {
      return false;
    }
  }

  return false;
};
