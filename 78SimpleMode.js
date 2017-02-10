/*
Have the function SimpleMode(arr) take the array of numbers stored in arr and return the number that appears most 
frequently (the mode). For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more 
than one mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5] should return 5 because it
appeared first). If there is no mode return -1. The array will not be empty. 

*/

function SimpleMode(arr) { 
  
  // the table that will contain each number as the key
  // and the number of times it occurs as the value
  // e.g. {"5": 1, "3": 3, "1": 1}
  var table = {};

  // loop through each number in the array
  // see if this number already exists in table
  // if so add 1 to the count, if not set count = 1
  for (var i = 0; i < arr.length; i++) {
    var number = arr[i];
    table[number] === undefined ? table[number] = 1 : table[number] += 1;
  }

  // setup a new object that will store the number with the highest count
  var answer = {number: null, count: 1};
  
  // get the mode by determining what number appears most often in the table 
  for (var n in table) {
    if (table[n] > answer["count"]) {
      answer["count"] = table[n];
      answer["number"] = n;
    }
  }

  // return the mode if one exists
  return (answer["count"] === 1) ? -1 : answer["number"];
         
}
   
SimpleMode([1,2,3,5,5,2]);   
