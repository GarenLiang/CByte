/*
Have the function FormattedNumber(strArr) take the strArr parameter being passed, which will only contain a single element, 
and return the string true if it is a valid number that contains only digits with properly placed decimals and commas, 
otherwise return the string false. For example: if strArr is ["1,093,222.04"] then your program should return the string true,
but if the input were ["1,093,22.04"] then your program should return the string false. 
The input may contain characters other than digits. 


*/

function FormattedNumber(strArr) { 
  var num = strArr[0];
  
  num = num.split(".");
  
  if (num.length > 2) {
    return false;
  }
  
  num = num[0].split(",");
  
  return num.every(function(a, i) {
    return i === 0 ? a.length <= 3 : a.length === 3;
  });    
}
   
// keep this function call here 
FormattedNumber(readline());
