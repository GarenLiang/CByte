/*
Have the function BinaryTreeLCA(strArr) take the array of strings stored in strArr, which will contain 3 elements: 
the first element will be a binary tree with all unique values in a format 
similar to how a binary heap is implemented with NULL nodes at any level represented with a #, the second 
and third elements will be two different values, and your goal is to find the lowest common ancestor of these two values. 
For example: if strArr is ["[12, 5, 9, 6, 2, 0, 8, #, #, 7, 4, #, #, #, #]", "6", "4"] then this tree looks like the following: 

 

For the input above, your program should return 5 because that is the value of the node that is the LCA of the two 
nodes with values 6 and 4. You can assume the two nodes you are searching for in the tree will exist somewhere in the tree. 

*/

function BinaryTreeLCA(strArr) { 

  // code goes here  
  var tree=strArr[0].replace(/[#]/g,'"#"'),
      num1=JSON.parse(strArr[1]),
      num2=JSON.parse(strArr[2]),
      tree=JSON.parse(tree),
      ind1=tree.indexOf(num1)+1,
      ind2=tree.indexOf(num2)+1,
      max=Math.max(ind1,ind2),
      min=Math.min(ind1,ind2);
      
      while(Math.trunc(Math.log2(max))!==Math.trunc(Math.log2(min))){
          max=Math.trunc(max/2);
          
      }
      while(max!==min){
          max=Math.trunc(max/2);
          min=Math.trunc(min/2);
      }
      return tree[max-1];
         
}
   
// keep this function call here 
BinaryTreeLCA(readline());
