/*Using the JavaScript language, have the function PalindromeTwo(str) take the str parameter being passed and 
return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) 
otherwise return the string false. The parameter entered may have punctuation and symbols but they should 
not affect whether the string is in fact a palindrome. For example: "Anne, I vote more cars race Rome-to-Vienna" 
should return true. 

Sample Test Cases
Input:"Noel - sees Leon"
Output:"true"

Input:"A war at Tarawa!"
Output:"true"
*/

function PalindromeTwo(str) { 

  // only match letters and numbers, ignore punctuation
  var arr = str.match(/[a-z0-9]+/gi);
  
  // join into a string
  var joined = arr.join('').toLowerCase();
  
  // check for palindrome
  return joined === joined.split('').reverse().join('');
         
}
   
PalindromeTwo("Anne, I vote more cars race Rome-to-Vienna");      
