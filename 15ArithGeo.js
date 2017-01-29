/*This challenge requires you to determine if the integers in an array follow either an arithmetic or geometric sequence. 
An arithmetic sequence is one where the difference between each successive pair of integers is constant, 
for example in the array [2, 4, 6, 8] the difference between the integers is always 2.
A geometric sequence is one where each element in the array is the product of the previous integer multiplied by some constant 
or ratio, for example in the array [3, 9, 27, 81] each element is a result of the previous element multiplied by 3.*/

function ArithGeo(arr) { 

  // this function will loop through the provided array
  // checking to see if the difference provided matches
  // every element-pair difference in the array
  function arrayDiffs(diff, arr, subtract) {

    // loop starting from i=2 and check if every difference is the same
    for (var i = 2; i < arr.length; i++) { 

      // store the temporary difference 
      var tempDiff = (subtract) ? arr[i] - arr[i-1] : arr[i] / arr[i-1];

      // if differences do not match return false
      if (tempDiff !== diff) { return false; }

      // if we reach the end of the array and all differences matched, return true
      else if (i === arr.length-1 && tempDiff === diff) { return true; }

    }

  }

  // store the first difference for a potential arithmetic sequence
  var diffArith = arr[1] - arr[0];

  // store the first difference for a potential geometric sequence
  var diffGeo = arr[1] / arr[0];

  // check the whole array for an arithmetic sequence
  var isArithSeq = arrayDiffs(diffArith, arr, true);
  
  // if not an arithmetic sequence, check for geometric sequence
  if (!isArithSeq) {

    var isGeoSeq = arrayDiffs(diffGeo, arr, false);
    return (isGeoSeq) ? "Geometric" : -1;

  } else {

    return "Arithmetic";

  }
         
}
   
ArithGeo([3, 9, 27, 81]);                                                              
