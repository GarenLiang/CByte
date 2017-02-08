/*
Have the function DistinctCharacters(str) take the str parameter being passed and determine if it contains at 
least 10 distinct characters, if so, then your program should return the string true, otherwise it should 
return the string false. For example: if str is "abc123kkmmmm?" then your program should return the string false 
because this string contains only 9 distinct characters: a, b, c, 1, 2, 3, k, m, ? adds up to 9. 

*/

function DistinctCharacters(str) { 

  // code goes here  
  var newstr=""
    for(i=0;i<str.length;i++){
        if(i===str.indexOf(str[i])){
            newstr+=str[i]
        }
    }
    return newstr.length>9
         
}
   
// keep this function call here 
DistinctCharacters(readline());
