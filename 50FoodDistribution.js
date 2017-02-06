/*
Have the function FoodDistribution(arr) read the array of numbers stored in arr which will represent the hunger 
level of different people ranging from 0 to 5 (0 meaning not hungry at all, 5 meaning very hungry). 
You will also have N sandwiches to give out which will range from 1 to 20. The format of the array 
will be [N, h1, h2, h3, ...] where N represents the number of sandwiches you have and the rest of the array will 
represent the hunger levels of different people. Your goal is to minimize the hunger difference between each 
pair of people in the array using the sandwiches you have available. 

For example: if arr is [5, 3, 1, 2, 1], this means you have 5 sandwiches to give out. 
You can distribute them in the following order to the people: 2, 0, 1, 0. 
Giving these sandwiches to the people their hunger levels now become: [1, 1, 1, 1]. 
The difference between each pair of people is now 0, the total is also 0, so your program should return 0. 
Note: You may not have to give out all, or even any, of your sandwiches to produce a minimized difference. 
Another example: if arr is [4, 5, 2, 3, 1, 0] then you can distribute the sandwiches 
in the following order: [3, 0, 1, 0, 0] which makes all the hunger levels the following: [2, 2, 2, 1, 0].
The differences between each pair of people is now: 0, 0, 1, 1 
 and so your program should return the final minimized difference of 2.

*/

/**
 * Calculate the difference between adjacent numbers in an array. The result is an
 * array of n - 1 items. A positive item means the first number is bigger, and
 * negative item means the second number is bigger.
 *
 * Example: differences([5,3,1,2,1]) -> [2,2,-1,1]
 */
function differences(array) {
  const diffs = [];

  for (let i = 0; i < array.length - 1; i++) {
    diffs.push(Math.abs(array[i] - array[i + 1]));
  }

  return diffs;
}

/* Sum the values in an array */
function sum(array) {
  return  array.reduce((p, c) => p + c, 0);
}

function smallestDifference(p, c) {
  return sum(differences(c)) < sum(differences(p)) ? c : p;
}

function FoodDistribution(arr) {
  let [sandwiches, ...hungers] = arr;
  let diffs = differences(hungers);

  while (sandwiches > 0 && sum(diffs) > 0) {
    const possibles = [];

    for (let i = 0; i < hungers.length; i++) {
      let temp = [...hungers];
      temp[i]--;
      possibles.push(temp);
    }

    hungers = possibles.reduce(smallestDifference);

    sandwiches--;

    // We recalculate the differences array since the levels of hunger have changed
    diffs = differences(hungers);
  }

  return sum(diffs);

}
   
// keep this function call here 
FoodDistribution(readline());
