/*
Have the function LongestMatrixPath(strArr) take the array of strings stored in strArr, which will be an NxM matrix of 
positive single-digit integers, and find the longest increasing path composed of distinct integers. When moving through 
the matrix, you can only go up, down, left, and right. For example: if strArr is ["345", "326", "221"], 
then this looks like the following matrix: 

3 4 5
3 2 6
2 2 1 

For the input above, the longest increasing path goes from: 3 -> 4 -> 5 -> 6. Your program should return the number 
of connections in the longest path, so therefore for this input your program should return 3. 
There may not necessarily always be a longest path within the matrix. 

*/

function LongestMatrixPath(strArr) { 
  let longestPath = 0;
  const matrix = strArr.map(item => item.split('').map(item => { return { visited: false, val: item }}));
  
  function travelMatrix(i, j, count, prev) {
    if (matrix[i] === undefined) { return 0; }
    if (matrix[i][j] === undefined) { return 0; }
    if (matrix[i][j].visited === true) { return 0; }
    if (prev !== undefined && matrix[i][j].val <= prev) { return 0; }
    
    count++;
    matrix[i][j].visited = true;
    const currentPath = count;
    
    // check up,
    const upPath = travelMatrix(i - 1, j, currentPath, matrix[i][j].val);
    count = count < upPath ? upPath : count;
    
    // check down,
    const downPath = travelMatrix(i + 1, j, currentPath, matrix[i][j].val);
    count = count < downPath ? downPath : count;
    
    // check right,
    const rightPath = travelMatrix(i, j + 1, currentPath, matrix[i][j].val);
    count = count < rightPath ? rightPath  : count;
    
    // check left
    const leftPath = travelMatrix(i, j - 1, currentPath, matrix[i][j].val);
    count = count < leftPath ? leftPath : count;
    
    matrix[i][j].visited = false;
    
    return count;
  }
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const path = travelMatrix(i, j, -1);
      longestPath = longestPath < path ? path : longestPath;
    }
  }
  return longestPath;
}
   
// keep this function call here 
LongestMatrixPath(readline());
