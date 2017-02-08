/*
Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, 
letters, and question marks, and check if there are exactly 3 question marks between every pair 
of two numbers that add up to 10. If so, then your program should return the string true, otherwise 
it should return the string false. If there aren't any two numbers that add up to 10 in the string, 
then your program should return false as well. For example: if str is "arrb6???4xxbl5???eee5" then your program should 
return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at 
the end of the string. 


*/
function QuestionsMarks(str) { 
  var arr = str.match(/[0-9]|[?]+/gi).join("");
  var nums = arr.match(/[0-9]|[?]{3,}/gi);
  for(var i = 0; i < nums.length; i++){
      if(/[?]+/.test(nums[i+1])){
         if(parseInt(nums[i]) + parseInt(nums[i+2]) === 10){
             return true;
         }
      }
  }
  return false;
}
   
// keep this function call here 
QuestionsMarks(readline());
