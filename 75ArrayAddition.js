/*
Have the function ArrayAddition(arr) take the array of numbers stored in arr and return the string true if 
any combination of numbers in the array can be added up to equal the largest number in the array, otherwise 
return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true 
because 4 + 6 + 10 + 3 = 23.
The array will not be empty, will not contain all the same elements, and may contain negative numbers. 

*/
function ArrayAddition(arr) { 
  const max = Math.max(...arr);
  arr.splice(arr.indexOf(max), 1);
  for (let i = 0; i < arr.length; i++) {
    let runningSum = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (i === j) { continue; }
      runningSum += arr[j];
      if (runningSum === max) {
          return true;
      }
    }
  }
  // code goes here  
  return false; 
         
}
   
// keep this function call here 
ArrayAddition(readline());
