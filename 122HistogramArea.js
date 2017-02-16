/*
Have the function HistogramArea(arr) read the array of non-negative integers stored in arr which will represent 
the heights of bars on a graph (where each bar width is 1), and determine the largest area underneath the entire bar graph. 
For example:if arr is [2, 1, 3, 4, 1] then this looks like the following bar graph: 

 

You can see in the above bar graph that the largest area underneath the graph is covered by the x's.
The area of that space is equal to 6 because the entire width is 2 and the maximum height is 3, 
therefore 2 * 3 = 6. Your program should return 6. The array will always contain at least 1 element. 

*/

function HistogramArea(arr) { 
  let result = 0
  for (let i = 0; i < arr.length; i++) {
    let blocks = [arr[i]];
    result = arr[i] > result ? arr[i] : result; 
    for (let j = 1 + i; j < arr.length; j++) {
      blocks.push(arr[j]);
      const area = Math.min(...blocks) * blocks.length;
      result = area > result ? area : result;
    }
  }
  // code goes here  
  return result; 
         
}
   
// keep this function call here 
HistogramArea(readline());
