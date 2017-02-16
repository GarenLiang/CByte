/*
Have the function LongestConsecutive(arr) take the array of positive integers stored in arr and return the length of the
longest consecutive subsequence (LCS). An LCS is a subset of the original list where the numbers are in sorted order, 
from lowest to highest, and are in a consecutive, increasing order. The sequence does not need to be contiguous 
and there can be several different subsequences. For example: if arr is [4, 3, 8, 1, 2, 6, 100, 9] 
then a few consecutive sequences are [1, 2, 3, 4], and [8, 9]. For this input, your program should return 4 
because that is the length of the longest consecutive subsequence. 
*/

function LongestConsecutive(arr) { 

  // code goes here  
  arr.sort((a,b)=>a-b);
  let counter=1;
  let LCS=1;
  arr.reduce((memo,next)=>{
      if(memo===next) {return next;}
      if(next===memo+1){
          counter++;
          LCS=LCS<counter ? counter :LCS;
      }else{
          counter=1;
      }
      return next;
  });
  return LCS;
         
}
   
// keep this function call here 
LongestConsecutive(readline());
