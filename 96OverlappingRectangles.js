/*
Have the function OverlappingRectangles(strArr) read the strArr parameter being passed which will
represent two rectangles on a Cartesian coordinate plane and will contain 8 coordinates with the first 4 making up 
rectangle 1 and the last 4 making up rectange 2. It will be in the following format: 
["(0,0),(2,2),(2,0),(0,2),(1,0),(1,2),(6,0),(6,2)"] Your program should determine the area of the space 
where the two rectangles overlap, and then output the number of times this overlapping region can fit into 
the first rectangle. For the above example, the overlapping region makes up a rectangle of area 2, and the 
first rectangle (the first 4 coordinates) makes up a rectangle of area 4, so your program should output 2. 
The coordinates will all be integers. If there's no overlap between the two rectangles return 0. 

*/

function OverlappingRectangles(strArr) {
  // parse strArr into array of arrays representing coordinates of rectangles
  let arr = strArr[0].split('),(');
  arr[0] = arr[0].slice(1);
  arr[arr.length - 1] = arr[arr.length - 1].slice(0, arr[arr.length - 1].length - 1)
  arr = arr.map(item => item.split(','));

  // seperate two rectangle coordinates
  const arr1 = arr.slice(0, 4);
  const arr2 = arr.slice(4);

  // convert strings to numbers
  arr1.forEach(item => {
    item[0] = +item[0];
    item[1] = +item[1];
  });
  arr2.forEach(item => {
    item[0] = +item[0];
    item[1] = +item[1];
  })

  //sort coordinates 
  arr1.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
  arr2.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);

  // organize coordinate so they are easily accessible
  // x1 and y1 represent the bottom left corner
  // x2 and y2 represent the top right corner 
  r1 = {};
  r2 = {};

  r1.x1 = arr1[0][0];
  r1.x2 = arr1[3][0];
  r1.y1 = arr1[0][1];
  r1.y2 = arr1[1][1];

  r2.x1 = arr2[0][0];
  r2.x2 = arr2[3][0];
  r2.y1 = arr2[0][1];
  r2.y2 = arr2[1][1];

  //check for overlap
  const xOverlap = (r2.x1 >= r1.x1 && r2.x1 <= r1.x2) || (r2.x2 >= r1.x1 && r2.x2 <= r1.x2);
  const yOverlap = (r2.y1 >= r1.y1 && r2.y1 <= r1.y2) || (r2.y2 > r1.y1 && r2.y2 <= r1.y2);

  if (xOverlap && yOverlap) {
    // find coordinates of overlap box
    const left = Math.max(r1.x1, r2.x1);
    const right = Math.min(r1.x2, r2.x2);
    const bottom = Math.max(r1.y1, r2.y1);
    const top = Math.min(r1.y2, r2.y2);

    // calculate each area
    const rect1Area = Math.abs(arr1[0][0] - arr1[3][0]) * Math.abs(arr1[0][1] - arr1[1][1]);
    const overlapArea = (right - left) * (top - bottom);

    return Math.floor(rect1Area / overlapArea);
  }

  // if no overlap, return 0
  return 0;
}
   
// keep this function call here 
OverlappingRectangles(readline());
