/*

Have the function ArithGeoII(arr) take the array of numbers stored in arr and return the string "Arithmetic" 
if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. 
If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference 
between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by 
some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. 
Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. 

*/

function ArithGeoII(arr) {  
  var diff = arr[1]-arr[0];
  var ratio = arr[1]/arr[0];
  var allRatioAreGood = true;
  var allDiffAreGood = true;
  for(var i = 2;i<arr.length;i++){
    allRatioAreGood &= (arr[i]/arr[i-1] == ratio);
    allDiffAreGood &= (arr[i]-arr[i-1] == diff);
      
  }
  // code goes here  
  if (allRatioAreGood)
    return "Geometric"
    if (allDiffAreGood)
      return "Arithmetic";
    return -1
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArithGeoII(readline());
