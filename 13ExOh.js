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





function WordCount(str) { 

  // split the string into an array
  var arr = str.split("");

  // create a new array of x's by using the filter function
  // which takes a test function with 3 parameters:
  // the element, its index, and the array it came from
  // and if the test passes it adds this element to the new array
  var x = arr.filter(function(elem, index, self) { 
    return elem === 'x';
  });

  // because we know the string can only contains x's and o's
  // we can subtract the length of our new array of x's from 
  // arr and that will leave us with the number of o's
  var o = arr.length - x.length;

  // see if their lengths are equal
  return x.length === o;
         
}
   
WordCount("xooox"); 
