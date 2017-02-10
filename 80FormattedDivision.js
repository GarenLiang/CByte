/*
Have the function FormattedDivision(num1,num2) take both parameters being passed, divide num1 by num2, 
and return the result as a string with properly formatted commas and 4 significant digits after the decimal place. 
For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345.6789". 
The output must contain a number in the one's place even if it is a zero. 

*/

function FormattedDivision(num1,num2) { 

  // code goes here  
  var div=(num1/num2).toFixed(4).split('');
  var insert=-1;
  for(var i=div.indexOf('.');i>0;i--){
      insert++;
      if(insert===3){
          div[i]=','+div[i];
          insert=0;
      }
  }
  return div.join('');
         
}
   
// keep this function call here 
FormattedDivision(readline());
