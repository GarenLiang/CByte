/*
Have the function SumMultiplier(arr) take the array of numbers stored in arr and return the string true if 
any two numbers can be multiplied so that the answer is greater than double the sum of all the elements in the array. 
If not, return the string false. For example: if arr is [2, 5, 6, -6, 16, 2, 3, 6, 5, 3] then 
the sum of all these elements is 42 and doubling it is 84. There are two elements in the array, 16 * 6 = 96 
and 96 is greater than 84, 
so your program should return the string true. 

*/

function SumMultiplier(arr) { 
var sum = 0 
  for (i = 0 ; i < arr.length ; i++) {
    sum += arr[i]
  }
  for (j = 0 ; j < arr.length ; j++) {
    for (k = 0 ; k < arr.length && k !== j ; k++) {
      if (arr[j]*arr[k] > 2*sum) {
        return true
      }
    }
  }  
return false
}
   
// keep this function call here 
SumMultiplier(readline());
