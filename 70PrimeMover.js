/*

Have the function PrimeMover(num) return the numth prime number. 
The range will be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the 16th prime number. 
*/

var memo = [2, 3];
function isPrime(n) {if (n < 2) return false; for (var i=2; i < n; i++) { if ((n / i)%1===0) return false; }return true;}
function PrimeMover(n) { 
  var c = memo[memo.length-1] + 1;
  while (true) {
    if (n < memo.length) {
        return memo[n - 1];
    }
    if (isPrime(c)) {
      memo.push(c);
    }
    c+=1;
  }
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PrimeMover(readline());
