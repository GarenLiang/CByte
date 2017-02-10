/*
Have the function DashInsertII(str) insert dashes ('-') between each two odd numbers and insert asterisks ('*') 
between each two even numbers in str. 
For example: if str is 4546793 the output should be 454*67-9-3. Don't count zero as an odd or even number. 

*/

function pop(str) {
  return str.replace(/([13579][13579])|([2468][2468])/g, function (c) {
    return (c[0]*1 % 2 === 1) ? c.split('').join('-') : c.split('').join('*');
  });
}
function DashInsertII(num) { 
  return pop(pop(num.toString()))
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DashInsertII(readline());
