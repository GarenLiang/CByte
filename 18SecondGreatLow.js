//This challenge requires you to return the second smallest and second largest numbers from an array. 
//To solve this we'll sort the array and then determine the elements we need to return

function SecondGreatLow(arr) { 

  // first we create a unique array by using the filter function
  // we check to see if the index of the current element in the array 
  // is equal to the first index of the element, if so then add the
  // element to the new array
  var unique = arr.filter(function(elem, index, self) {
    return self.indexOf(elem) === index;
  });

  // sort the unique array in ascending order
  var sorted = unique.sort(function(a, b) {
    return a - b;
  });

  // return the second smallest and largest elements
  // but also check to make sure there is more than 1
  // element in the array
  if (sorted.length < 2) { 
    return sorted[0] + " " + sorted[0]; 
  } else {
    return sorted[1] + " " + sorted[sorted.length - 2];
  }
         
}
   
SecondGreatLow([2, 10, 5, 1, -12, 140]); 
