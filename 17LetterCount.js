/*
This challenge requires you to determine which word has the greatest number of repeated characters in a string, 
and return that word. For example, in the string "coderbyte is cool" your program should return the word "coderbyte" 
because it has 2 e's. If no word in the string has repeated characters, then your program should return -1. 
To solve this challenge, we'll loop through each word in the string, storing the current character and the number of times 
it has occurred so far. 
We'll use an object-type data structure that will help us keep track of the word, its characters, and the counts.
*/

function LetterCountI(str) { 

  // array of words
  var words = str.split(" ");
  
  // the table that will contain each word with a key and value pair
  // being the characters and the number of times they appeared
  // e.g. {hello: {h: 1, e: 1, l: 2, o: 1}}
  var table = {};
  
  // loop through each word
  for (var i = 0; i < words.length; i++) {
    
    // create new entry in table with the key 
    // being this word
    var thisWord = words[i];
    table[thisWord] = {};
    
    // create a key/value pair that will store
    // the highest letter count for each word
    table[thisWord]["highest"] = 0;
    
    // loop through each character in word and
    // store number of times each letter appears
    for (var c = 0; c < words[i].length; c++) {
     
      // see if this character already exists in table for
      // this word: if so add 1 to the count, if not set count = 1
      var thisChar = thisWord[c];
      table[thisWord][thisChar] === undefined ?
        table[thisWord][thisChar] = 1 :
      	table[thisWord][thisChar] += 1;
      
      // update the highest letter count for each 
      // new letter in the iteration
      if (table[thisWord][thisChar] > table[thisWord]["highest"]) {
      	table[thisWord]["highest"] = table[thisWord][thisChar];
      }
      
    }
    
  }

  // setup a new object that will store the word
  // with the highest number of repeating characters
  var answer = {word: null, count: 1};
  
  // now determine what word has the highest number 
  // of repeating letters by accessing the "highest"
  // property of each word in the table
  for (var w in table) {
    if (table[w]["highest"] > answer["count"]) {
      answer["count"] = table[w]["highest"];
      answer["word"] = w;
    }
  }
  
  return (answer["count"] === 1) ? -1 : answer["word"];
       
}
   
LetterCountI("world hello from coderbyte");     
