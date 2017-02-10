/*
Have the function PermutationStep(num) take the num parameter being passed and return the next number greater than
num using the same digits. For example: if num is 123 return 132, if it's 12453 return 12534. 
If a number has no greater permutations, return -1 (ie. 999). 

*/

function PermutationStep(num) {
  var arr = num.toString().split("");
  var x = arr.length, a, b, temp;
  for (var i = x-1; i >= 0; i--) {
    a = arr[i];
    b = arr[i-1];
    if (a > b) {
      arr[i] = b;
      arr[i-1] = a;
      temp = arr.splice(i, x-1).sort();
      return arr.concat(temp).join("");
    }
  }
  return -1;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PermutationStep(readline());
