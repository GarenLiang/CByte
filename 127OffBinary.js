/*
Have the function OffBinary(strArr) read the array of strings stored in strArr, which will contain two elements, 
the first will be a positive decimal number and the second element will be a binary number. 
Your goal is to determine how many digits in the binary number need to be changed to represent the decimal number 
correctly (either 0 change to 1 or vice versa). For example: if strArr is ["56", "011000"] then 
your program should return 1 because only 1 digit needs to change in the binary number (the first zero needs to become a 1) 
to correctly represent 56 in binary. 

*/

function OffBinary(strArr) { 

  // code goes here  
  var binary=parseInt(strArr[0]).toString(2);
  var comparer=strArr[1];
  var counter=0;
  
  for(var i=0;i<comparer.length;i++){
      if(comparer.charAt(i)!==binary.charAt(i)){
          counter++;
      }
  }
  return counter;
         
}
   
// keep this function call here 
OffBinary(readline());
