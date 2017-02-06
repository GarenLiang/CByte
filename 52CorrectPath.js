/*
Have the function CorrectPath(str) read the str parameter being passed, which will represent 
the movements made in a 5x5 grid of cells starting from the top left position. The characters in the input string 
will be entirely composed of: r, l, u, d, ?. 
Each of the characters stand for the direction to take within the grid, for example: r = right, l = left, 
u = up, d = down. Your goal is to determine what characters the question marks should be in order for a 
path to be created to go from the top left of the grid all the way to the bottom right without touching 
previously travelled on cells in the grid. 
For example: if str is "r?d?drdd" then your program should output the final correct string that will allow a 
path to be formed from the top left of a 5x5 grid to the bottom right. For this input, your program 
should therefore return the string rrdrdrdd. There will only ever be one correct path and there will 
always be at least one question mark within the input string

*/

function CorrectPath(str) { 

  var chars = str.split("");
  var storeCount = {
      "?": 0,
      "l": 0,
      "r": 0,
      "u": 0,
      "d": 0
  };
  chars.forEach (function(letter) {
    storeCount[letter]++;
  });
  console.log(storeCount);
  var countq = storeCount["?"];
  var countl = storeCount["l"];
  var countr = storeCount["r"];
  var countu = storeCount["u"];
  var countd = storeCount["d"];
  var dcheck = 0;
  var ucheck = 0;
  var rcheck = 0;
  var lcheck = 0;
  
  for (var i = 0; i < chars.length; i++) {
    if (chars[i] === "d") {
      dcheck++;
    }
    else if (chars[i] === "u") {
      ucheck++;
    }
    else if (chars[i] === "r") {
      rcheck++;
    }
    else if (chars[i] === "l") {
      lcheck++;
    }
    else if (chars[i] === "?" && countq > 0 && (dcheck - ucheck === 4)) {
      chars[i] = "r";
      countr++;
      rcheck++;
      countq--;
    }
    else if (chars[i] === "?" && (countd - countu) < 4){
      chars[i] = "d";
      countd++;
      dcheck++;
      countq--;
    }
    else if (chars[i] === "?" && (countd - countu) === 4 && countq > 0 && ((dcheck - ucheck) <= 0 || (dcheck - ucheck === 4))) {
      chars[i] = "r";
      countr++;
      rcheck++;
      countq--;
    }
    else if (chars[i] === "?" && (countr - countl) === 4 && countq > 0 && (rcheck - lcheck) <= 0) {
      chars[i] = "d";
      countr++;
      rcheck++;
      countq--;
    }
    else if (chars[i] === "?" && (countr - countl) < 4){
      chars[i] = "r";
      countr++;
      rcheck++;
      countq--;
    }
    else if (chars[i] === "?" && (countd - countu) > 4){
      chars[i] = "u";
      countu++;
      ucheck++;
      countq--;
    }
    else if (chars[i] === "?" && (countr - countl) > 4){
      chars[i] = "l";
      countl++;
      lcheck++;
      countq--;
    }
    else if (chars[i] === "?" && (countd - countu) === 4 && countq > 0) {
      chars[i] = "u";
      countu++;
      ucheck++;
      countq--;
    }
    else if (chars[i] === "?" && (countr - countl) === 4 && countq > 0) {
      chars[i] = "l";
      countl++;
      lcheck++;
      countq--;
    }
    
  }

    
      
  return chars.join("");
}
   
// keep this function call here 
CorrectPath(readline());
