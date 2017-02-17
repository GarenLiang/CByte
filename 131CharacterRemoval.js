/*
Have the function CharacterRemoval(strArr) read the array of strings stored in strArr, which will contain 2 elements: 
the first element will be a sequence of characters representing a word, and the second element will be a long string 
of comma-separated words, in alphabetical order, that represents a dictionary of some arbitrary length. For example: 
strArr can be: ["worlcde", "apple,bat,cat,goodbye,hello,yellow,why,world"]. Your goal is to determine the minimum 
number of characters, if any, can be removed from the word so that it matches one of the words from the dictionary. 
In this case, your program should return 2 because once you remove the characters "c" and "e" you are left with 
"world" and that exists within the dictionary. 
If the word cannot be found no matter what characters are removed, return -1. 


*/

function CharacterRemoval(strArr) {
  const targetWord = strArr[0];
  
  let result = false;
  const dict = strArr[1].split(',');

  dict.forEach(word => {
    let strCopy = targetWord;
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      const index = strCopy.indexOf(letter);
      if (index === -1) { return; }
      strCopy = strCopy.slice(index + 1);
    }

    const lettersRemoved = targetWord.length - word.length;
    
    result = result === false || lettersRemoved < result ? lettersRemoved : result;
  });
  
  return result === false ? -1 : result;
}
   
// keep this function call here 
CharacterRemoval(readline());
