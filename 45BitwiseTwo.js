/*
Have the function BitwiseTwo(strArr) take the array of strings stored in strArr, 
which will only contain two strings of equal length that represent binary numbers, 
and return a final binary string that performed the bitwise AND operation on both strings. 
A bitwise AND operation places a 1 in the new string where there is a 1 in both locations in the binary strings,
otherwise it places a 0 in that spot.For example: if strArr is ["10111", "01101"] 
then your program should return the string "00101" 


*/
function BitwiseTwo(strArr) {
  let a, b;
  [a, b] = strArr.map(n => parseInt(n, 2));
  return (a & b).toString(2);
}
   
// keep this function call here 
BitwiseTwo(readline());
