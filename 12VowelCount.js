//This challenge requires you to return the number of vowels (a, e, i, o, u) in a string. 
//For example, if the string is "All cows eat grass" then your program should return the integer 5. 
//The first program is a basic loop that keeps track of the vowels it encounters.

function VowelCount(str) { 

  // convert the string to all lowercase characters
  var str = str.toLowerCase();

  // possible vowels
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  // where we store our vowel count
  var count = 0;

  // loop through string checking each character
  for (var i = 0; i < str.length; i++) { 

    // if this character is found in vowels array
    // then the character is a vowel and we add 1 to count
    if (vowels.indexOf(str[i]) !== -1) {
      count = count + 1
    }

  }

  // return the number of vowels found
  return count;
         
}
   
VowelCount("All cows eat grass"); 
