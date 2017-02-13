/*
Have the function TreeConstructor(strArr) take the array of strings stored in strArr, which will contain pairs of integers 
in the following format: (i1,i2), where i1 represents a child node in a tree and the second integer i2 signifies that 
it is the parent of i1. For example: if strArr is 
["(1,2)", "(2,4)", "(7,2)"], then this forms the following tree: 

 

which you can see forms a proper binary tree. Your program should, in this case, return the string true because a valid
binary tree can be formed. If a proper binary tree cannot be formed with the integer pairs, then return the string false.
All of the integers within the tree will be unique, 
which means there can only be one node in the tree with the given integer value. 


*/

function TreeConstructor(strArr) { 
    const parentHash = {};
    const childHash = {};
    for (let i = 0; i < strArr.length; i++) {
        const pair = strArr[i].split(",");
        const child = pair[0].slice(1);
        const parent = Number(pair[1].slice(0, pair[1].length-1));
        if (childHash[child]) {
            return false;
        }
        childHash[child] = true;
        parentHash[parent] = parentHash[parent] || [];
        parentHash[parent].push(child);
        if (parentHash[parent].length > 2) {
            return false;
        }
    }
    return true;
}
   
// keep this function call here 
TreeConstructor(readline());
