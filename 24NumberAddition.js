//This challenge requires you to find all the numbers in a string and return their sum. For example, 
//if the string is "75Number9" then your program should return 84 because 75 + 9 = 84. 
//We'll solve this by finding all the numbers and storing them in an array, and then adding up all the numbers in this array.

function NumberAddition(str) { 

  // use the JavaScript match function which
  // tries to find all matching patterns in the string
  // and it returns an array of all matches found
  // e.g. "75Number9" returns [75, 9] 
  // or set to 0 if no numbers are found
  var nums = str.match(/[0-9]+/gi) || [0];
  
  // use the JavaScript reduce functions which calls a
  // function on each value in the array and returns
  // a final single value
  return nums.reduce(function(previousVal, currentVal) {
    return parseInt(previousVal) + parseInt(currentVal);
  });
         
}
   
NumberAddition("75Number9");  
