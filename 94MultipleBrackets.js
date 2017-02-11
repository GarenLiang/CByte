/*
Have the function MultipleBrackets(str) take the str parameter being passed and 
return 1 #ofBrackets if the brackets are correctly matched and each one is accounted for. 
Otherwise return 0. For example: if str is "(hello [world])(!)", then the output should be 1 3 
because all the brackets are matched and there are 3 pairs of brackets, but if str is "((hello [world])" 
the the output should be 0 because the brackets do not correctly match up. Only "(", ")", "[", and "]" 
will be used as brackets. If str contains no brackets return 1. 


*/

function MultipleBrackets(str) { 

  // code goes here
  var count1 = 0,
      count2 = 0,
      count3 = 0,
      count4 = 0;
      
  for(var n of str) {
      if(n === '(') {
          count1++;
      }
      else if(n === ')') {
          count2--;
      }
      else if(n === '[') {
          count3++;
      }
      else if(n === ']') {
          count4--;
      }
  }
  return count1 + count2 === 0 && count3 + count4 === 0 ? 1 + " " + (count1+count3) : 0; 
         
}
   
// keep this function call here 
MultipleBrackets(readline());
