/*
Have the function SwapII(str) take the str parameter and swap the case of each character. 
Then, if a letter is between two numbers (without separation), switch the places of the two numbers. 
For example: if str is "6Hello4 -8World, 7 yes3" the output should be 4hELLO6 -8wORLD, 7 YES3. 

*/

function SwapII(str) { 
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 122) {
      str = str.slice(0, i) + String.fromCharCode(str.charCodeAt(i) - 32) + str.slice(i + 1); 
    } else if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
      str = str.slice(0, i) + String.fromCharCode(str.charCodeAt(i) + 32) + str.slice(i + 1);
    }
  }
  str = str.replace(/([1-9][a-zA-Z]+[1-9])+/g, match => {
    return match[match.length - 1] + match.slice(1, match.length - 1) + match[0];
  })
  return str;
}

// keep this function call here 
SwapII(readline());
