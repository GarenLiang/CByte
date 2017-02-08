/*
Have the function TimeDifference(strArr) read the array of strings stored in strArr which will be an unsorted 
list of times in a twelve-hour format like so: HH:MM(am/pm). Your goal is to determine the smallest difference 
in minutes between two of the times in the list. For example: if strArr is ["2:10pm", "1:30pm", "10:30am", "4:42pm"] 
then your program should return 40 because the smallest difference is between 1:30pm and 2:10pm with a 
difference of 40 minutes. The input array will always contain at least two elements and all of the elements 
will be in the correct format and unique. 

*/

function TimeDifference(strArr) { 
  const minutesArr = strArr.map(time => {
    time = time.split(':');
    const minutes = (time[0] * 60) + Number(time[1].slice(0, time[1].length - 2));
    if (time[1].slice(time[1].length - 2) === 'pm') {
      return minutes + (12 * 60);
    } else if (time[0] === '12' && time[1].slice(time[1].length - 2) === 'am') {
      return Number(time[1].slice(0, time[1].length - 2))
    }
    return minutes;
  })

  minutesArr.sort((a, b) => a - b);
  let minDiff;
  for (let i = 0; i < minutesArr.length; i++) {
    minDiff = minDiff === undefined || minutesArr[i + 1] - minutesArr[i] < minDiff ? minutesArr[i + 1] - minutesArr[i] : minDiff;
    
  }
  // edge case: last - first
  const lastMinusFirst = (24 * 60) + minutesArr[0] - minutesArr[minutesArr.length - 1];
  
  return lastMinusFirst < minDiff ? lastMinusFirst : minDiff;
}
   
// keep this function call here 
TimeDifference(readline());
