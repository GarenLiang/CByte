/*
Have the function NextPalindrome(num) take the num parameter being passed and return the next largest palindromic number. 
The input can be any positive integer. For example: if num is 24, then your program should return 33 because that 
is the next largest number that is a palindrome.

*/
function NextPalindrome(num) {

  let count = num + 1;

  while (true) {
    numString = count.toString();
    revString = numString.split('')
      .reverse()
      .join('');
    if (revString === numString) return parseInt(numString, 10);
    count++;
  }
}
   
// keep this function call here 
NextPalindrome(readline());
