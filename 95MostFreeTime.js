/*
Have the function MostFreeTime(strArr) read the strArr parameter being passed which will represent a full day 
and will be filled with events that span from time X to time Y in the day. The format of each event will be 
hh:mmAM/PM-hh:mmAM/PM. For example, strArr may be ["10:00AM-12:30PM","02:00PM-02:45PM","09:10AM-09:50AM"]. 
Your program will have to output the longest amount of free time available between the start of your first event 
and the end of your last event in the format: hh:mm. The start event should be the earliest event in the day and 
the latest event should be the latest event in the day. The output for the previous input would therefore be 01:30 
(with the earliest event in the day starting at 09:10AM 
and the latest event ending at 02:45PM). The input will contain at least 3 events and the events may be out of order. 

*/
function timeToMins(t) {
  return ((t[5] === 'P' ? 12 : 0) + t.substring(0, 2) * 1 % 12) * 60 + t.substring(3, 5)*1;
}
function minsToTime(m) {
  var h = Math.floor(m / 60);
  m = m % 60;
  return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
}
function MostFreeTime(strArr) { 
  var apts = [];
  for (var i = 0; i < strArr.length; i += 1) {
    var s = strArr[i].split('-');
    apts.push([timeToMins(s[0]), timeToMins(s[1])]);
  }
  apts.sort(function (a, b) {
    return a[0] - b[0];
  });
  var f = 0;
  for (i = 0; i < apts.length - 1; i += 1) {
    f = Math.max(f, apts[i + 1][0] - apts[i][1]);
  }
  return minsToTime(f);
}
MostFreeTime(readline());
