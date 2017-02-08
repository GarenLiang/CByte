/*
Have the function CamelCase(str) take the str parameter being passed and 
return it in proper camel case format where the first letter of each word is capitalized (excluding the first letter). 
The string will only contain letters and some combination of delimiter punctuation characters separating each word. 

For example: if str is "BOB loves-coding" then your program should return the string bobLovesCoding. 

*/


function CamelCase(str) {
  return str.toLowerCase()
    .replace(/[^a-z\s]/g, ' ')
    .split(' ')
    .map((word, i) => i === 0 ? word : word.slice(0, 1).toUpperCase().concat(word.slice(1)))
    .join('')
}
   
// keep this function call here 
CamelCase(readline());
