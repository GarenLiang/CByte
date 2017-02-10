/*
Have the function PrimeChecker(num) take num and return 1 if any arrangement of num comes out to be a prime number, 
otherwise return 0. For example: if num is 910, 
the output should be 1 because 910 can be arranged into 109 or 019, both of which are primes. 

*/

function checkPrime (num) {
  if (num === 1) { return false }
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function PrimeChecker(num) { 
  let str = '' + num;
  const primes = {};
  const last = str[str.length - 1];
  while (str[0] !== last) {
    if (checkPrime(+str) === true) { return 1; }
    str = str.slice(1) + str[0];
  }
  if (checkPrime(+str) === true) { return 1; }
  return 0;
}
   
// keep this function call here 
PrimeChecker(readline());
