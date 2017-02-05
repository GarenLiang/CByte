/*
Have the function LargestPair(num) take the num parameter being passed and determine the largest double digit number
within the whole number. For example: if num is 4759472 then your program should return 94 because that is the 
largest double digit number. 
The input will always contain at least two positive digits. 

*/
function LargestPair(num) { 

  // code goes here  
  var s=''+num;
  var nums=[];
  for(var i=1;i<s.length;i++){
      nums.push(Number(s[i-1]+s[i]));
  }
  return Math.max(...nums);
         
}
   
// keep this function call here 
LargestPair(readline());
