function PrimeTime(num) { 

  // all numbers less than 2 are not primes
  if (num < 2) { return false; }       
  
  // loop from 2 to num and check if num is divisible
  // by any of these numbers, if so, then it is not a prime
  for (var i = 2; i < num; i++) {
    if (num % i === 0) { return false; }
  }
  
  // return true if the loop finished and num was  
  // not divisible evenly by any number
  return true;
  
}
   
PrimeTime(109);  


/*
We can improve the above code because of the following fact: Suppose we have some number N that is not a prime. 
If N is not a prime, 
then N = a * b for some integers a and b. 

Example: N = 110, then 110 = 10 * 11 or 110 = 22 * 5. 

We can see that in both cases above, no matter what we chose for a or b, one of those numbers is less than the square root of
N, in this case, less than Sqrt(110) = 10.48808. In the above example, 10 < 10.48808 and 5 < 10.48808. So in our code, 
when we run the loop to check if there is 
some number that evenly divides into N, we only need to loop until the square root of N instead of looping all the way to N.
*/
function PrimeTime(num) { 

  // all numbers less than 2 are not primes
  if (num < 2) { return false; }       
  
  // more efficient loop
  for (var i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
    if (num % i === 0) { return false; }
  }
  
  // return true if the loop finished and num was  
  // not divisible evenly by any number
  return true;
  
}
   
PrimeTime(109);    
