/*
Have the function MatrixSpiral(strArr) read the array of strings stored in strArr which will represent a 2D N matrix, 
and your program should return the elements after printing them in a clockwise, spiral order. 
You should return the newly formed list of elements as a string with the numbers separated by commas. 
For example: if strArr is "[1, 2, 3]", "[4, 5, 6]", "[7, 8, 9]" then this looks like the following 2D matrix: 

1 2 3
4 5 6
7 8 9 

So your program should return the elements of this matrix in a clockwise, spiral order which is: 1,2,3,6,9,8,7,4,5 

*/

function MatrixSpiral(strArr) { 
  const matrix = strArr.map(item => JSON.parse(item));
  if (matrix[0].length === 1) { return matrix.map(item => item[0]).join(','); }
  let dir = 0;
  let result = '';
  while (matrix.length > 0) {
    if (dir === 0) {
      result += matrix.shift().join(',') + ',';
    } else if (dir === 1) {
      for (let i = 0; i < matrix.length; i++) {
        result += matrix[i].pop() + ',';
      }
    } else if (dir === 2) {
      result += matrix.pop().reverse().join(',') + ',';
    } else {
      for (let i = matrix.length - 1; i > -1; i--) {
        result += matrix[i].shift() + ',';
      }
    }
    dir = dir === 3 ? 0 : dir + 1;
  }
  return result.slice(0, result.length - 1);
}
   
// keep this function call here 
MatrixSpiral(readline());
