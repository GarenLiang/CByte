//Have the function BinaryConverter(str) return the decimal form of the binary value. For example: if 101 is 
//passed return 5, or if 1000 is passed return 8. 

function BinaryConverter(str) { 

  // code goes here  
  num=Number(str);
  
  return parseInt(num,2);
         
}
   
// keep this function call here 
BinaryConverter(readline());
