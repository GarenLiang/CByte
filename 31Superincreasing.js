/*
Have the function Superincreasing(arr) take the array of numbers stored in arr and determine 
if the array forms a superincreasing sequence where each element in the array is greater than the sum of all previous elements.
The array will only consist of positive integers. For example: if arr is [1, 3, 6, 13, 54] 
then your program should return the string "true" because it forms a superincreasing sequence. 
If a superincreasing sequence isn't formed, then your program should return the string "false" 
*/

function Superincreasing(arr) { 

  // store the sum
  var sum = 0;
  
  // loop through entire array
  for (var i = 0; i < arr.length; i++) {

    // if a number is less than or equal to the current sum, simply return false
    if (arr[i] <= sum) { return "false"; }

    // update the sum after each iteration
    sum += arr[i];

  }
  
  return true;
         
} 
// keep this function call here 
Superincreasing(readline());
