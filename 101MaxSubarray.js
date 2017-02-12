/*
Have the function MaxSubarray(arr) take the array of numbers stored in arr and determine the largest sum 
that can be formed by any contiguous subarray in the array. For example, if arr is [-2, 5, -1, 7, -3] 
then your program should return 11 because the sum is formed by the subarray [5, -1, 7]. 
Adding any element before or after this subarray would make the sum smaller. 

*/
function MaxSubarray(arr) {
  let max = Math.max(...arr);

  for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {
        const sum = arr.slice(i, j + 1)
                       .reduce((p, c) => p + c, 0);
        max = Math.max(max, sum);
    }

  }

  return max;
}
   
// keep this function call here 
MaxSubarray(readline());
