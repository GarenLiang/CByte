/*
Have the function ArrayMinJumps(arr) take the array of integers stored in arr, 
where each integer represents the maximum number of steps that can be made from that position, 
and determine the least amount of jumps that can be made to reach the end of the array. For example: if arr is 
[1, 5, 4, 6, 9, 3, 0, 0, 1, 3] then your program should output the number 3 because you can reach the end of the array 
from the beginning via the following steps: 
1 -> 5 -> 9 -> END or 1 -> 5 -> 6 -> END. Both of these combinations produce a series of 3 steps. 
And as you can see, you don't always have to take the maximum number of jumps at a specific position, 
you can take less jumps even though the number is higher. 

If it is not possible to reach the end of the array, return -1. 

*/

function ArrayMinJumps(arr) {
    
  //creating an array with the max position for each element
  var stepsArr = arr.map(function(ele, i) {
      return ele + i;
  });
  
  var i = 0;
  var steps = 0;
  
  while (stepsArr[i] < arr.length - 1) {
    //creating a chunk array to find the farthest position we can go
    var chunk = stepsArr.slice(i + 1, stepsArr[i] + 1);
    var max = Math.max(...chunk);
    var idx = stepsArr.indexOf(max);

    if (idx === i) {
      return -1;
    }
    
    i = idx;
    steps++;
  }
  
  steps++;
  
  return steps;
}

// keep this function call here 
ArrayMinJumps(readline());
