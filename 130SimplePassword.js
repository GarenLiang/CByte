/*Have the function SimplePassword(str) take the str parameter being passed and determine if 
it passes as a valid password that follows the list of constraints: 

1. It must have a capital letter.
2. It must contain at least one number.
3. It must contain a punctuation mark.
4. It cannot have the word "password" in the string.
5. It must be longer than 7 characters and shorter than 31 characters.

If all the above constraints are met within the string, the your program should return the string true, 
otherwise your program should return the string false. For example: 
if str is "apple!M7" then your program should return "true". 
*/

function SimplePassword(str) { 

  // code goes here  
  var test= /[A-Z]/.test(str)&& /\d/.test(str)&&/[^\w]/.test(str)&& 
            /^((?!password).)*$/i.test(str) && /.{8,30}/.test(str);
            
  return test;
         
}
   
// keep this function call here 
SimplePassword(readline());
