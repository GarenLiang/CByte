/*
Have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using 
the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and
outputting that number along with a single character of the repeating sequence. 
For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols. 

*/

function RunLength(str) { 
  let counter = 1;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++;
    } else {
      result += counter + str[i];
      counter = 1;
    }
  }
  return result;
}
   
// keep this function call here 
RunLength(readline());
