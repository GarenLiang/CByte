/*
Have the function OtherProducts(arr) take the array of numbers stored in arr and return a new 
list of the products of all the other numbers in the array for each element. For example: 
if arr is [1, 2, 3, 4, 5] then the new array, where each location in the new array is the product of all other elements, 
is [120, 60, 40, 30, 24]. The following calculations were performed to get this answer: 
[(2*3*4*5), (1*3*4*5), (1*2*4*5), (1*2*3*5), (1*2*3*4)]. You should generate this new array and 
then return the numbers as a string joined by a hyphen: 120-60-40-30-24. 
The array will contain at most 10 elements and at least 1 element of only positive integers. 
*/

function OtherProducts(arr) {
    let holdArray = [];

    arr.forEach((val, ind, theArray) => {
      newArray = Array.from(theArray)
      newArray.splice(ind,1)

      holdArray[ind] = newArray.reduce((val1, val2) => val1 * val2);
    })

    return holdArray.join('-');
}
   
// keep this function call here 
OtherProducts(readline());
