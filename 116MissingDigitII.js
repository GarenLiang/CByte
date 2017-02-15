/*
Have the function MissingDigitII(str) take the str parameter, 
which will be a simple mathematical formula with three numbers, 
a single operator (+, -, *, or /) and an equal sign (=) and return the two digits that complete the equation. 
In two of the numbers in the equation, there will be a single ? character, and your program should determine 
what digits are missing and return them separated by a space. For example, if str is "38?5 * 3 = 1?595" 
then your program should output 6 1. 

The ? character will always appear in both the first number and the last number in the mathematical expression. 
There will always be a unique solution. 

*/

function MissingDigitII(str) { 
    var work = str;
     
    for(var i  = 0; i<10; i++){
        for(var p = 0; p<10; p++){
            work = work.replace(/[?]/,i);
             work = work.replace(/[?]/,p);
       var symbol = work.match(/[^0-9| ]/);
        work = work.replace(/[^0-9| ]/g,",").split(" , ");
       
       switch(symbol[0].toString()){
           case "+":
               if(parseInt(work[0]) + parseInt(work[1]) === parseInt(work[2])){
                   return i + " " + p;
               }
               break;
             case "-":
                 if(parseInt(work[0]) - parseInt(work[1]) ===parseInt(work[2])){
                   return i + " " + p;
               }
               break;
             case "*":
                 if(parseInt(work[0]) * parseInt(work[1]) === parseInt(work[2])){
                   return i + " " + p;
               }
               break;
             case "/":
                 if(parseInt(work[0]) / parseInt(work[1]) === parseInt(work[2])){
                   return i + " " + p;
               }
               break;
       }
           work = work.join(); 
           work = str;
        }
    }
  // code goes here  
  return str; 
         
}
   
// keep this function call here 
MissingDigitII(readline());
