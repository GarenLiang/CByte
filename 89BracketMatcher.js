/*
Have the function BracketMatcher(str) take the str parameter being passed and return 1 
if the brackets are correctly matched and each one is accounted for. Otherwise return 0. For example: 
if str is "(hello (world))", then the output should be 1, but if str is "((hello (world))" the the output should 
be 0 because the brackets do not correctly match up. Only "(" and ")" will be used as brackets. 
If str contains no brackets return 1. 


*/

function BracketMatcher(str) { 
  var b = 0;
  for(c of str)
    if (c=='(')
      b++;
    else if (c==')')
      b--
  // code goes here  
  return b==0?1:0; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
BracketMatcher(readline());
