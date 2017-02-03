/*
Have the function OffLineMinimum(strArr) take the strArr parameter being passed which will be an array of integers 
ranging from 1...n and the letter "E" and return the correct subset based on the following rules. 
The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] where the I's stand for integers 
and the E means take out the smallest integer currently in the whole set. When finished, your program 
should return that new set with integers separated by commas. 
For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5.

*/

function OffLineMinimum(strArr) { 

  // store all numbers as we loop through array
  var nums = [];
  
  // store only the minimum numbers
  var outputs = [];
  
  // loop through strArr
  for (var i = 0; i < strArr.length; i++) {
    
    // if a number is encountered store it in nums
    if (strArr[i] !== 'E') { 
      nums.push(parseInt(strArr[i]));
    }  
    
    // if an E is encountered remove the smallest number
    // from nums and store it in the outputs array
    else {
      var smallest = Math.min.apply(null, nums);
      nums.splice(nums.indexOf(smallest), 1);
      outputs.push(smallest);
    }

  }
  
  // return numbers in string form
  return outputs.join(',');
         
}
   
// keep this function call here 
OffLineMinimum(readline());
