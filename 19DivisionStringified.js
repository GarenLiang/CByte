/*
This challenge requires you to divide two numbers and return the answer in string form. 
For example, if the inputs are 1400500 and 52, we first divide 1400500 by 52 which gives us an answer of 26932.692, 
but we should return this answer in rounded, proper form: 26,933. 
To solve this challenge we'll make use of string methods after dividing the two numbers.
*/

function DivisionStringified(num1, num2) { 

  // first we divide and then round accordingly
  var div = Math.round(num1/num2);
  
  // convert answer to string and then
  // to an array separating each number
  div = div.toString().split('');
  
  // keep counter for inserting comma logic
  var insert = 0;
  
  // logic for inserting a comma every 3
  // elements in the array starting from the end
  // e.g. ['4', '5', '3', '2'] becomes ['4', ',5', '3', '2']
  // and then we would join all the numbers into a string
  if (div.length > 3) {
    for (var i = div.length-1; i >= 0; i--) {
      insert++;
      if (insert === 3) { 
        div[i] = ',' + div[i];
        insert = 0;
      }
    }
  }
  
  // return the elements joined into a proper string
  return div.join('');
         
}

DivisionStringified(1400500, 52);  
