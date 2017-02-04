/*
Have the function RectangleArea(strArr) take the array of strings stored in strArr, 
which will only contain 4 elements and be in the form (x y) where x and y are both integers, 
and return the area of the rectangle formed by the 4 points on a Cartesian grid. 
The 4 elements will be in arbitrary order. For example: if strArr is ["(0 0)", "(3 0)", "(0 2)", "(3 2)"] 
then your program should return 6 because the width of the rectangle is 3 
and the height is 2 and the area of a rectangle is equal to the width * height.
*/

function RectangleArea(strArr) {
    var obj = {};
    obj.x1 = parseInt(strArr[0].match(/\((\-*\d+)/)[1], 10);
    obj.y1 = parseInt(strArr[0].match(/(\-*\d+)\)/)[1], 10);

    for (var i = 1; i < 3; i++) {
        if (obj.x1 !== parseInt(strArr[i].match(/\((\-*\d+)/)[1], 10)) {
            obj.x2 = parseInt(strArr[i].match(/\((\-*\d+)/)[1], 10);
        }
        if (obj.y1 !== parseInt(strArr[i].match(/(\-*\d+)\)/)[1], 10)) {
            obj.y2 = parseInt(strArr[i].match(/(\-*\d+)\)/)[1], 10);
        }
    }
    if (Object.keys(obj).length !== 4) {
        return 0;
    } else {
        return (Math.abs(obj.x1 - obj.x2) * Math.abs(obj.y1 - obj.y2));
    }
}
   

   
// keep this function call here 
RectangleArea(readline());
