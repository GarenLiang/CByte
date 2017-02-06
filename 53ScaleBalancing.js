/*
Have the function ScaleBalancing(strArr) read strArr which will contain two elements, the first being the two positive 
integer weights on a balance scale (left and right sides)
and the second element being a list of available weights as positive integers. 
Your goal is to determine if you can balance the scale by using the least amount of weights from the list,
but using at most only 2 weights. For example: if strArr is ["[5, 9]", "[1, 2, 6, 7]"] 
then this means there is a balance scale with a weight of 5 on the left side and 9 on the right side.
It is in fact possible to balance this scale by adding a 6 to the left side from the list of weights and adding a 2 
to the right side. Both scales will now equal 11 and they are perfectly balanced. Your program should return a 
common separated string of the weights that were used from the list in ascending order, so for this example your 
program should return the string 2,6 There will only ever be one unique solution and the list of 
available weights will not be empty. It is also possible to add two weights to only one side of the scale to balance it.
If it is not possible to balance the scale then your program should return the string not possible. 

*/

function ScaleBalancing(strArr) { 
  const w1 = JSON.parse(strArr[0])[0];
  const w2 = JSON.parse(strArr[0])[1];
  
  let weights = JSON.parse(strArr[1]);
  
  for (let i = 0; i < weights.length; i++) {
    if (w1 + weights[i] === w2 || w2 + weights[i] === w1) { return '' + weights[i]; }
    for (let j = i + 1; j < weights.length; j++) {
      if (w1 + weights[i] + weights[j] === w2
        || w2 + weights[i] + weights[j] === w1
        || w1 + weights[i] === w2 + weights[j]
        || w2 + weights[i] === w1 + weights[j]
      ) {
        return '' + weights[i] + ',' + weights[j];
      }
    }
  }
  // code goes here  
  return 'not possible'; 
         
}
   
// keep this function call here 
ScaleBalancing(readline());
