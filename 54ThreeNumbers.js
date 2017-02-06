/*

Have the function ThreeNumbers(str) take the str parameter being passed and determine if exactly three unique, 
single-digit integers occur within each word in the string. The integers can appear anywhere in the word, 
but they cannot be all adjacent to each other. If every word contains exactly 3 unique integers somewhere within it, 
then return the string true, otherwise return the string false. For example: if str is "2hell6o3 wor6l7d2" 
then your program should return "true" but if the string is "hell268o w6or2l4d" then your program should 
return "false" because all the integers are adjacent to each other in the first word. 
Use the Parameter Testing feature in the box below to test your code with different arguments.
*/

function ThreeNumbers(str) { 
    var words = str.split(' ');
    return words.every(uniqueThree);
}

function uniqueThree(str) {
    var nums = str.match(/[0-9]+/g);
    if (nums === null || nums.length === 1 || nums.length > 3)
        {return false;}
    else {nums = nums.join('');}
    
    if (nums.length !== 3) {return false; }
    else {
        return nums[1] !== nums[2] && nums[2] !== nums[3] && nums[1] !== nums[3];
    }
}
   
// keep this function call here 
ThreeNumbers(readline());
