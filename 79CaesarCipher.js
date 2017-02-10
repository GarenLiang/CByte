/*
Have the function CaesarCipher(str,num) take the str parameter and perform a Caesar Cipher shift on it using the 
num parameter as the shifting number. A Caesar Cipher works by shifting each letter in the string N places down 
in the alphabet (in this case N will be num). Punctuation, spaces, and capitalization should remain intact. 
For example if the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt". 

*/
function CaesarCipher(str,num) { 

  // code goes here  
  var letters="abcdefghijklmnopqrstuvwxyz";
  var code="";
  var c;
  
  for(var i=0;i<str.length;i++){
      c=str.charAt(i);
  
  if(letters.indexOf(c) !== -1){
      code += letters.charAt((letters.indexOf(c)+num)%26);
  }
  else if(letters.indexOf(c.toLowerCase())!== -1){
      code += letters.charAt((letters.indexOf(c.toLowerCase())+num)%26).toUpperCase();
  }
  
  else {code +=c;}
  }
  return code;
         
}
   
// keep this function call here 
CaesarCipher(readline());
