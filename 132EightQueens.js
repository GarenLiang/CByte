/*
Have the function EightQueens(strArr) read strArr which will be an array consisting of the locations of eight Queens on a
standard 8x8 chess board with no other pieces on the board. The structure of strArr will be the following: 
["(x,y)", "(x,y)", ...] where (x,y) represents the position of the current queen on the chessboard 
(x and y will both range from 1 to 8 where 1,1 is the bottom-left of the chessboard and 8,8 is the top-right). 
Your program should determine if all of the queens are placed in such a way where none of them are attacking each other. 
If this is true for the given input, return the string true otherwise return the first queen in the list that 
is attacking another piece in the same format it was provided. 

For example: if strArr is ["(2,1)", "(4,2)", "(6,3)", "(8,4)", "(3,5)", "(1,6)", "(7,7)", "(5,8)"] then your program 
should return the string true. The corresponding chessboard of queens for this input is below (taken from Wikipedia). 

*/

function EightQueens(strArr) { 

  // code goes here  
  var queens=strArr.map(x=>[parseInt(x.substr(1,1)),parseInt(x.substr(3,1))]); 
  while(queens.length>0){
      var q1=queens.shift();
      for(var i=0;i<queens.length;i++){
          var q2=queens[i];
          if(q1[0]===q2[0]||q1[1]===q2[1]||Math.abs(q1[0]-q2[0])===Math.abs(q1[1]-q2[1])){
              return "("+q1[0]+","+q1[1]+")";
          }
      }
  }
  return "true";
         
}
   
// keep this function call here 
EightQueens(readline());
