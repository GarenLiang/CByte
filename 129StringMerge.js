/*
Have the function StringMerge(str) read the str parameter being passed which will contain a large string of 
alphanumeric characters with a single asterisk character splitting the string evenly into two separate strings. 
Your goal is to return a new string by pairing up the characters in the corresponding locations in both strings. 
For example: if str is "abc1*kyoo" then your program should return the string akbyco1o because a pairs with k, 
b pairs with y, etc. The string will always split evenly with the asterisk in the center. Use the Parameter Testing 
feature in the box below to test your code with different arguments.
*/

function StringMerge(str) { 

  // code goes here  
  var a=str.split('*');
  var b=a[0];
  var c=a[1];
  var d='';
  for(var i=0;i<b.length;i++){

       d+=(b[i]+c[i]);
  }
  return d;
  
}
   
// keep this function call here 
StringMerge(readline());
