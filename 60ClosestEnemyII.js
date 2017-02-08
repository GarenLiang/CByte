/*
Have the function ClosestEnemyII(strArr) read the matrix of numbers stored in strArr which will be a 2D matrix that contains 
only the integers 1, 0, or 2. Then from the position in the matrix where a 1 is, return the number of spaces either left, 
right, down, or up you must move to reach an enemy which is represented by a 2. 
You are able to wrap around one side of the matrix to the other as well. For example: if strArr is 
["0000", "1000", "0002", "0002"] then this looks like the following: 

0 0 0 0
1 0 0 0
0 0 0 2
0 0 0 2 

For this input your program should return 2 because the closest enemy (2) is 2 spaces away from the 1 
by moving left to wrap to the other side and then moving down once. The array will contain any number of 0's and 2's, 
but only a single 1. It may not contain any 2's at all as well, where in that case your program should return a 0. 

*/

function ClosestEnemyII(strArr) { 
  let index;
  const enemies = [];
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < strArr.length; j++) {
      if (strArr[i][j] === '1') {
        index = [i, j];
      }
      if (strArr[i][j] === '2') {
        enemies.push([i, j])
      }
    }
  }
  if (enemies.length === 0) { return 0; }
  let shortestDistance = strArr.length + 1;
  for (let k = 0; k < enemies.length; k++) {
    const i = enemies[k][0];
    const j = enemies[k][1];
    // try without wrapping
    if (Math.abs(index[0] - i) + Math.abs(index[1] - j) < shortestDistance) {
      shortestDistance = Math.abs(index[0] - i) + Math.abs(index[1] - j)
    }
    // try wrapping i
    if (Math.abs(index[0] - (i - strArr.length + 1)) + Math.abs(index[1] - j) + 1 < shortestDistance) {
      shortestDistance = Math.abs(index[0] - (i - strArr.length + 1)) + Math.abs(index[1] - j) + 1
    }
    // try wrapping j
    if (Math.abs(index[0] - i) + Math.abs(index[1] - (j - strArr.length + 1)) + 1 < shortestDistance) {
      shortestDistance = Math.abs(index[0] - i) + Math.abs(index[1] - (j - strArr.length + 1)) + 1
    }
    // try wrapping both
    if (Math.abs(index[0] - (i - strArr.length + 1)) + Math.abs(index[1] - (j - strArr.length + 1)) + 2 < shortestDistance) {
      shortestDistance = Math.abs(index[0] - (i - strArr.length + 1)) + Math.abs(index[1] - (j - strArr.length + 1)) + 2
    }
  }
  return shortestDistance;
}
   
// keep this function call here 
ClosestEnemyII(readline());
