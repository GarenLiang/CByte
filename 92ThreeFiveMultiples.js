/*
Have the function ThreeFiveMultiples(num) return the sum of all the multiples of 3 and 5 that are below num.
For example: if num is 10, the multiples of 3 and 5 that are below 10 are 3, 5, 6, and 9, and adding them up you get 23, 
so your program should return 23. The integer being passed will be between 1 and 100. 

*/

function ThreeFiveMultiples(num) {
    var arr = [];
    for (var i = 0; i <= num - 1; i++) {
        if (i % 3 === 0 || (i % 5 === 0 && i % 3 !== 0)) {
            arr.push(i);
        }
    }
    return arr.reduce(function(hold, val) {
        return hold + val;
    });
}


// keep this function call here
// to see how to enter arguments in JavaScript scroll down
ThreeFiveMultiples(readline());
