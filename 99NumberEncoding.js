/*
Have the function NumberEncoding(str) take the str parameter and encode the message according to the following rule: 
encode every letter into its corresponding numbered position in the alphabet. 
Symbols and spaces will also be used in the input. 
For example: if str is "af5c a#!" then your program should return 1653 1#!. 

*/

function NumberEncoding(str) { 
  return str.toLowerCase().replace(/([a-z])/g, (match, item) => item.charCodeAt(0) - 96);
}
   
// keep this function call here 
NumberEncoding(readline());
