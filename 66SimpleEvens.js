/*
Have the function SimpleEvens(num) 
check whether every single number in the passed in parameter is even.
If so, return the string true, otherwise return the string false. For example: 
if num is 4602225 your program should return the string false because 5 is not an even number. 
*/

function SimpleEvens(num) { 

  // code goes here  
  arr=num.toString();
  for(var i=0;i<arr.length;i++){
      if(arr[i]%2!==0) {return false }
  }
  return true;
         
}
   
// keep this function call here 
SimpleEvens(readline());
