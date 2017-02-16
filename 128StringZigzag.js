/*
Have the function StringZigzag(strArr) read the array of strings stored in strArr, which will contain two elements,
the first some sort of string and the second element will be a number ranging from 1 to 6. The number represents 
how many rows to print the string on so that it forms a zig-zag pattern. For example: if strArr is ["coderbyte", "3"] 
then this word will look like the following if you print it in a zig-zag pattern with 3 rows: 

 

Your program should return the word formed by combining the characters as you iterate through each row, so for this 
example your program should return the string creoebtdy.

*/

function StringZigzag(strArr) { 
  var tracker = 1;
  var str = strArr[0];
  var rows = parseInt(strArr[1]);
  var result = [];
  var down = true;
  
  for (var i = 0; i < str.length; i++) {
    result[tracker] += str[i];
    
    if (tracker === 1) {
      down = true;
    } else if (tracker === rows) {
      down = false;
    }
    
    if (down) {
      tracker++;
    } else {
      tracker--;
    }
  }
  
  return result.join('').split('undefined').join('');
}
   
// keep this function call here 
StringZigzag(readline());
