/*
Have the function OverlappingRanges(arr) take the array of numbers stored in arr which will contain 5 positive integers, 
the first two representing a range of numbers (a to b), the next 2 also representing another range of integers (c to d), 
and a final 5th element (x) which will also be a positive integer, and return the string true if both sets of ranges overlap 
by at least x numbers. For example: if arr is [4, 10, 2, 6, 3] then your program should return the string true. 
The first range of numbers are 4, 5, 6, 7, 8, 9, 10 and the second range of numbers are 2, 3, 4, 5, 6. 
The last element in the array is 3, and there are 3 numbers that overlap between both ranges: 4, 5, and 6. 
If both ranges do not overlap by at least x numbers, then your program should return the string false
*/

function OverlappingRanges(arr) {

  // keep a count of how many numbers overlap
  var counter = 0;
  
  // loop through one of the ranges
  for (var i = arr[0]; i < arr[1]; i++) {

    // check if a number within the first range exists
    // in the second range
    if (i >= arr[2] && i <= arr[3]) { 
      counter += 1;
    }

  }
 
  // check if the numbers that overlap is equal to or greater
  // than the last number in the array
  return (counter >= arr[4]) ? true : false;
}

OverlappingRanges([4, 10, 2, 6, 3]);   
