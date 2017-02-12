/*
Have the function BitmapHoles(strArr) take the array of strings stored in strArr, which will be a 2D matrix of 0 and 1's, 
and determine how many holes, or contiguous regions of 0's, 
exist in the matrix. A contiguous region is one where there is a connected group of 0's going in one or more of 
four directions: up, down, left, or right. For example: if strArr is ["10111", "10101", "11101", "11111"], 
then this looks like the following matrix: 

1 0 1 1 1
1 0 1 0 1
1 1 1 0 1
1 1 1 1 1 

For the input above, your program should return 2 because there are two separate contiguous regions of 0's, 
which create "holes" in the matrix. You can assume the input will not be empty. 


*/


function BitmapHoles(strArr) { 

  // code goes here  
  var index=[],
      holes=0,
      checker;
  for(var i=0;i<strArr.length;i++){
      strArr[i]=strArr[i].split('');
      for(var j=0;j<strArr[i].length;j++){
          if(strArr[i][j]==="0"){
            index.push([i,j]);
          }
      }
  }
  for(var c=0;c<index.length;c++){
      checker=false;
      for(var k=c+1;k<index.length;k++){
          if(index[k][0]===index[c][0]+1&&index[k][1]===index[c][1]||index[k][0]===index[c][0]&&index[k][1]===index[c][1]+1){
              checker=true;
          }
      }
      if(checker===false){
          holes+=1;
      }
  }
  return holes;
         
}
   
// keep this function call here 
BitmapHoles(readline());
