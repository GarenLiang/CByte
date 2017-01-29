/*This challenge requires you to determine if a string is a palindrome. 
A palindrome is a string that is read the same forwards as it is backwards, for example "mom" or "eye." 
To solve this challenge, we'll need to use some code that we wrote in a previous solution which required us to reverse a string.
Luckily, this challenge isn't actually too hard because the string won't contain any punctuation or numbers.*/

function Palindrome(str) { 

  // first we'll get rid of spaces and make the characters 
  // all lowercase to make it easier to work with
  var str = str.split(" ").join("").toLowerCase();

  // we wrote this reverse code in a previous solution
  var rev = str.split('').reverse().join('');

  // now it's very easy to check if a string is a palindrome
  return str === rev;
         
}
   
Palindrome("Never odd or even");    
