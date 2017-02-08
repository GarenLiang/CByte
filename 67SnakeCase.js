/*
Have the function SnakeCase(str) take the str parameter being passed 
and return it in proper snake case format where each word is lowercased and separated from adjacent 
words via an underscore. The string will only contain letters and some combination of delimiter punctuation 
characters separating each word. For example: if str is "BOB loves-coding" then your program should return the string bob_loves_coding. 

*/

function SnakeCase(str) { 

  // code goes here  
  return str.toLowerCase().
        replace(/[^a-z\s]/g,' ').
        split(' ')
        .join('_');
         
}
   
// keep this function call here 
SnakeCase(readline());
