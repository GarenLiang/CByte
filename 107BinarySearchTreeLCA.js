/*
Have the function BinarySearchTreeLCA(strArr) take the array of strings stored in strArr, which will contain 3 elements:
the first element will be a binary search tree with all unique values in a preorder traversal array, 
the second and third elements will be two different values, and your goal is to find the lowest common ancestor of these 
two values. For example: if strArr is ["[10, 5, 1, 7, 40, 50]", "1", "7"] then this tree looks like the following: 

 

For the input above, your program should return 5 because that is the value of the node that is the LCA 
of the two nodes with values 1 and 7. You can assume the two nodes you are searching for in the tree will exist
somewhere in the tree.


*/

function BinarySearchTreeLCA(strArr) {
  /**
   * The key is to find the biggest number to the left of both (including the
   * one with the lowest index) that is smaller or equal to the max of the two
   */
  const min = Math.min(Number(strArr[1]), Number(strArr[2]));
  const max = Math.max(Number(strArr[1]), Number(strArr[2]));
  const treeArray = JSON.parse(strArr[0]);
  const lowestIndex = Math.min(treeArray.indexOf(min),
                               treeArray.indexOf(max));
  const filtered = treeArray.slice(0,lowestIndex + 1)
                            .filter(n => n <= max);

  return Math.max(...filtered);
}
   
// keep this function call here 
BinarySearchTreeLCA(readline());
