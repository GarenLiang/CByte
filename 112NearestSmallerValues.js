/*
Have the function NearestSmallValues(arr) take the array of integers stored in arr, and for each element in the list, 
search all the previous values for the nearest element that is smaller than the current element and create a new list 
from these numbers. If there is no element before a certain position that is smaller, input a -1. 
For example: if arr is [5, 2, 8, 3, 9, 12] then the nearest smaller values list is [-1, -1, 2, 2, 3, 9].
The logic is as follows: 

For 5, there is no smaller previous value so the list so far is [-1]. For 2, there is also no smaller previous value, 
so the list is now [-1, -1]. For 8, the nearest smaller value is 2 so the list is now [-1, -1, 2]. 
For 3, the nearest smaller value is also 2, so the list is now [-1, -1, 2, 2]. This goes on to produce the answer above.
Your program should take this final list and return the elements as a string separated by a space: -1 -1 2 2 3 9 

*/

function NearestSmallerValues(arr) { 

  // code goes here  
  let resArr=[];
  
  arr.forEach((val,ind)=>{
      for(let i=ind;i>=0;i--){
          if(arr[i-1]<=val){
              resArr.push(arr[i-1]);
              break;
          }else if(i===0){
              resArr.push(-1);
          }
      }
  });
  return resArr.join(' ');
         
}
   
// keep this function call here 
NearestSmallerValues(readline());
