/*
Have the function ArrayMatching(strArr) read the array of strings stored in strArr which will 
contain only two elements, both of which will represent an array of positive integers.
For example: if strArr is ["[1, 2, 5, 6]", "[5, 2, 8, 11]"], then both elements 
in the input represent two integer arrays, and your goal for this challenge is to add the elements in
corresponding locations from both arrays. For the example input, your program should do the following 
additions: [(1 + 5), (2 + 2), (5 + 8), (6 + 11)] which then equals [6, 4, 13, 17]. 
Your program should finally return this resulting array in a 
string format with each element separated by a hyphen: 6-4-13-17. 

*/

function ArrayMatching(strArr) { 
    var a = strArr[0].match(/\d+/g).map(Number);
    var b = strArr[1].match(/\d+/g).map(Number);
    
    var longest = a.length >= b.length ? a : b;
    var other = longest === a ? b : a;
    
    return longest.map((e,i) => other[i] ? e + other[i] : e).join('-');
}
   
// keep this function call here 
ArrayMatching(readline());
