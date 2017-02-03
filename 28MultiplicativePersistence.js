/*
This challenge requires you to continually multiply all the numbers in the parameter until you reach a single number. 
For example, if the input is 39, then you multiply 3 * 9 = 27. You then do the same for 27, 2 * 7 = 14, 
and then finally 1 * 4 = 4. When you reach a single number your program should return how many times you had to 
add to reach it. For 39, your program should return 3. 
We'll solve this problem by recursively multiplying the numbers in the input.

*/

function MultiplicativePersistence(num) { 

  var arr = num.toString().split('');
  
  // keep multiplying the numbers in num
  // if there is more than 1 number
  while (arr.length > 1) {
    
    var mult = 1;
    
    // multiply the numbers in num
    for (var i = 0; i < arr.length; i++) { 
      mult *= parseInt(arr[i]);  
    }
    
    // return 1 + the multiplicative persistence of this new number
    return 1 + MultiplicativePersistence(mult); 
    
  }
  
  // if there is only 1 number return 0
  return 0;
         
}
    
MultiplicativePersistence(39); 
