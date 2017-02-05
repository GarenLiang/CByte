/*
Have the function NonrepeatingCharacter(str) take the str parameter being passed, which will contain only alphabetic 
characters and spaces, and return the first non-repeating character. For example: if str is "agettkgaeee" 
then your program should return k. The string will always contain at least one character and there will 
always be at least one non-repeating character. 

*/
function NonrepeatingCharacter(str) { 

  // code goes here  
  for(var i=0;i<str.length;i++){
      if(str.indexOf(str[i])===str.lastIndexOf(str[i])) return str[i];
  }
         
}
   
// keep this function call here 
NonrepeatingCharacter(readline());
