/*
Have the function LongestIncreasingSequence(arr) take the array of positive integers stored in arr and return the length 
of the longest increasing subsequence (LIS). A LIS is a subset of the original list where the numbers are in sorted order,
from lowest to highest, and are in increasing order. The sequence does not need to be contiguous or unique, 
and there can be several different subsequences. For example: if arr is [4, 3, 5, 1, 6] then a possible LIS 
is [3, 5, 6], and another is [1, 6]. For this input, your program should return 3 because that is the length 
of the longest increasing subsequence. 

*/

function LongestIncreasingSequence(arr) {
  
  /* 
   * First, create a function that recursively builds increasing sequences (IS).
   * The first parameter, start, represents the first value of each subarray.
   * The second parameter, arr, represents the rest of the subarray's values. 
   */
   
  function findLongestFromStart(start, arr) {
      
    // When the array is emptied, return 1 as base case.
    if (arr.length === 0) return 1;
    
    // Build array to capture lengths of all IS.
    let listLength = arr.map((elem, index) => {
        
      // When we encounter a larger term, build all subarrays from that value.
      // Add 1 to represent increased length caused by that term.
      if (elem > start) {
        return 1 + findLongestFromStart(arr[index], arr.slice(index + 1));
      }
    
      // If we encounter smaller terms, we stop their sequence at length of 1.
      return 1;
    });
  
    // LIS of this array is represented by the max value found in listLength
    return Math.max(...listLength);
  }

  // Create storage for LIS of all possible IS arrays
  let maxLength = 0;
  
  /*
   * Now we can loop through input array to calculate length of
   * all possible IS and update max value accordingly.
   */

  arr.forEach((elem, index) => {
    let longest = findLongestFromStart(elem, arr.slice(index + 1));
    
    if (longest > maxLength) maxLength = longest;
  });
  
  // Output represents longest increasing sequence!
  return maxLength;
}
   
// keep this function call here 
LongestIncreasingSequence(readline());
