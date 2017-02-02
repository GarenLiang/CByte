/*
This challenge requires you to continually add up all the numbers in the parameter until you reach a single number.
For example, if the input is 2718, then you add up 2 + 7 + 1 + 8 = 18. You then do the same for 18, 1 + 8 = 9. 
When you reach a single number your program should return how many times you had to add to reach it. For 2718, 
your program should return 2. We'll solve this problem by recursively adding up the numbers in the input

*/

function AdditivePersistence(num) { 

  var arr = num.toString().split('');
  
  // keep adding up the numbers in num
  // if there is more than 1 number
  while (arr.length > 1) {
    
    var added = 0;
    
    // add up the numbers up in num
    for (var i = 0; i < arr.length; i++) { 
      added += parseInt(arr[i]);  
    }
    
    // return 1 + the additive persistence of this new number
    return 1 + AdditivePersistence(added); 
    
  }
  
  // if there is only 1 number return 0
  return 0;
         
}
   
AdditivePersistence(2718);  
