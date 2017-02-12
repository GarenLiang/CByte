/*
Have the function MissingDigit(str) take the str parameter, which will be a simple mathematical formula with three numbers,
a single operator (+, -, *, or /) and an equal sign (=) and return the digit that completes the equation. 
In one of the numbers in the equation, there will be an x character, and your program should determine what digit is missing.
For example, if str is "3x + 12 = 46" then your program should output 4. The x character can appear in any of the three 
numbers and all three numbers will be greater than or equal to 0 and less than or equal to 1000000. 

*/

function MissingDigit(str) {  
let arr = str.split(" "), ans, missingX;
let flipOp = {"*": '/', "+": '-', "-": '+', "/": '*'}
 
for (let i=0; i<arr.length; i++) {
    if (arr[i].match(/d*xd*/g)) {
        missingX = arr[i]
            if (i<3) { 
                if (arr[1] === "-" && i===2) { ans = eval(arr[0] + "-" + arr[4]) }
                else { ans = eval(arr[4] + flipOp[arr[1]] + (i === 0 ? arr[2] : arr[0])) }
            } else { 
                ans = eval(arr[0] + arr[1] + arr[2])
            }
    }
}
ans = String(ans)
return ans[missingX.indexOf('x')]
}
MissingDigit(readline());
