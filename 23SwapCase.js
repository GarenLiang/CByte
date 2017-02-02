//This challenge requires you to swap uppercase and lowercase characters in a string. 
//For example, if the string is "Hello World" then your program should return "hELLO wORLD"

function SwapCase(str) { 

  // turn the string into an array of characters
  var chars = str.split('');
  
  // loop through the array swapping letter cases
  // uppercase -> lowercase
  // lowercase -> uppercase
  for (var i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i].toUpperCase()) { 
      chars[i] = chars[i].toLowerCase();
    }
    else if (chars[i] === chars[i].toLowerCase()) { 
      chars[i] = chars[i].toUpperCase();
    }
  }
  
  // return the modified array of characters joined as a string
  return chars.join('');
         
}
   
SwapCase("Hello World"); 
