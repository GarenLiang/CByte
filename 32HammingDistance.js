/*
Have the function HammingDistance(strArr) take the array of strings stored in strArr, 
which will only contain two strings of equal length and return the Hamming distance between them. 
The Hamming distance is the number of positions where the corresponding characters are different. 
For example: if strArr is ["coder", "codec"] then your program should return 1. 
The string will always be of equal length and will only contain lowercase characters from the alphabet and numbers. 

*/

function HammingDistance(strArr) { 

  // get each word
  var word1 = strArr[0];
  var word2 = strArr[1];

  // store the final count
  var count = 0;
  
  // loop through one of the words and check to see if
  // each character from both words matches up
  for (var i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) { 
      count++;
    }   
  }
  
  return count;
         
}
   
HammingDistance(readline()); 
