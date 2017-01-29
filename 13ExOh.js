//This challenge requires you to determine if the number of x's in the string is equal to the number of o's. 
//For example, if the string were "xoox" then your program should return the string true. 
//There are several ways to solve this challenge, but we'll cover the most basic way first.

function WordCount(str) { 

  // we split the string with the separator being
  // the x's and o's and compare them

  // this returns a string containing only o's
  var x = str.split("x").join("");

  // this returns a string containing only x's
  var o = str.split("o").join("");

  // see if their lengths are equal
  return x.length === o.length;
         
}
   
WordCount("xooox");  
