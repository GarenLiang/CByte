/*
Have the function Division(num1,num2) take both parameters being passed and return the Greatest Common Factor. 
That is, return the greatest number that evenly goes into both numbers with no remainder. For example: 
12 and 16 both are divisible by 1, 2,
and 4 so the output should be 4. The range for both parameters will be from 1 to 10^3. 

*/
function Division(num1, num2) { 

  // setup variables
  var a = num1;
  var b = num2;
  var r;
  
  // keep using the mod function until a or b hits 0
  while (a > 0 && b > 0) {
    r = a % b;
    a = b;
    b = r;
  }
  
  // return the non-zero answer
  return (a === 0) ? b : a;
         
}
   
Division(36, 54);                                                             
