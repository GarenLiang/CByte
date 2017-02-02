/*Have the function PowersofTwo(num) take the num parameter being passed 
which will be an integer and return the string true if it's a power of two. 
If it's not return the string false. For example if the input is 16 then your program should return the string 
true but if the input is 22 then the output should be the string false.*/

function PowersofTwo(num) { 

  var power = 0;
  var counter = 1;
  
  // raise 2 to the power of 1, 2, 3, etc.
  // until we reach a number greater than or equal to num
  while (power < num) {
    power = Math.pow(2, counter);  
    counter++;
  }
  
  // determine if 2 to some power is equal to num
  return (num === power) ? true : false;
         
}
   
PowersofTwo(512);  


function PowersofTwo(num) { 

  // to check if a number is an integer and not a decimal in JavaScript
  // one method is to check if the number is equal to the integer version of itself
  // e.g. 6.1 === parseInt(6.1) is false
  // e.g. 6   === parseInt(6)   is true
  return Math.log2(num) === parseInt(Math.log2(num));
         
}
   
PowersofTwo(512);  
