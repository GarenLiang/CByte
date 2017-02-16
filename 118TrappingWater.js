/*
Have the function TrappingWater(arr) take the array of non-negative integers stored in arr, 
and determine the largest amount of water that can be trapped. The numbers in the array represent the 
height of a building (where the width of each building is 1) and if you imagine it raining, 
water will be trapped between the two tallest buildings. For example: if arr is [3, 0, 0, 2, 0, 4] 
then this array of building heights looks like the following picture if we draw it out: 

 

Now if you imagine it rains and water gets trapped in this picture, then it'll look like the following 
(the x's represent water): 

 

This is the most water that can be trapped in this picture, and if you calculate the area you get 10, 
so your program should return 10. 

*/
function TrappingWater(arr) { 

  // code goes here  
  let water=0;
  
  for(var i=1;i<arr.length-1;i++){
      let maxL=Math.max(...arr.slice(0,i));
      let maxR = Math.max(...arr.slice(i+1));
      if(maxL>arr[i]&&maxR>arr[i])
      {
          water += Math.min(maxL,maxR)-arr[i];
      }
  }
  return water; 
         
}
   
// keep this function call here 
TrappingWater(readline());
