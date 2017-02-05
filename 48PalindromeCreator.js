/*
Have the function PalindromeCreator(str) take the str parameter being passed and determine if 
it is possible to create a palindromic string of at least 3 characters by removing 1 or 2 characters. 
For example: if str is "abjchba" then you can remove the characters jc to produce "abhba" which is a palindrome. 
For this example your program should return the two characters that were removed with no delimiter and in the order 
they appear in the string, so jc. If 1 or 2 characters cannot be removed to produce a palindrome, 
then return the string not possible. If the input string is already a palindrome, 
your program should return the string palindrome. The input will only contain lowercase alphabetic characters. 
Your program should always attempt to create the longest palindromic substring by removing 1 or 2 characters 
(see second sample test case as an example). The 2 characters you remove do not have to be adjacent in the string. 

*/

function PalindromeCreator(str) {
  // try existing word
  if (str === str.split('').reverse().join('')) {
    return 'palindrome';
  }

  // try one letter
  for (let i = 0; i < str.length; i++) {
    const oneLetterTest = str.slice(0, i) + str.slice(i + 1);
    if (oneLetterTest === oneLetterTest.split('').reverse().join('')) {
      return str[i];
    }
  }
  
  //try two letters
  for (let i = 0; i < str.length; i++) {
    const oneLetterTest = str.slice(0, i) + str.slice(i + 1);
    for (let j = i; j < oneLetterTest.length; j++) {
      const twoLetterTest = oneLetterTest.slice(0, j) + oneLetterTest.slice(j + 1);
      if (twoLetterTest === twoLetterTest.split('').reverse().join('')) {
        
        return str[i] + oneLetterTest[j];
      }
    }
  }
  return 'not possible'
}
   
// keep this function call here 
PalindromeCreator(readline());
