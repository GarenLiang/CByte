/*
Have the function SymmetricTree(strArr) take the array of strings stored in strArr,
which will represent a binary tree, and determine if the tree is symmetric (a mirror image of itself). 
The array will be implemented similar to how a binary heap is implemented, except the tree may not be complete and 
NULL nodes on any level of the tree will be represented with a #. For example: if strArr is 
["1", "2", "2", "3", "#", "#", "3"] then this tree looks like the following: 

 

For the input above, your program should return the string true because the binary tree is symmetric. 

Use the Parameter Testing feature in the box below to test your code with different arguments.

*/

function SymmetricTree(strArr) {
  let x = 1;
  let count = 0;
  while (strArr.length) {
    x++;
    if (x > 10) break;
    let length = Math.pow(2, count);
    let newArray = strArr.splice(0, length);
    let revArray = Array.from(newArray).reverse();
    if(!sameAs(newArray, revArray)) {
      return false;
    }
    count = newArray.filter(val => val !== '#').length;
  }
  return true;
}

function sameAs(arr1, arr2) {
  return arr1.every((val, ind) => val === arr2[ind]);
}
