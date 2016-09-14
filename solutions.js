//sorting
function twoSort(s) {
  s.sort();
  var string = s[0];
  var array = [];
  for (var i = 0; i < string.length; i++) {
      array.push(string[i]);
}

return array.join('***');
}

//greeting
function greet(name){
  if(name === "Johnny")
    return "Hello, my love!";
  return "Hello, " + name + "!";
}

//charcodes
var b = [];
function isVow(a){
  a.forEach(change);
  console.log(b);
}

function change(c) {
  var e = c;
  var d = String.fromCharCode(c);
  if (typeof e === 'string') {
    b.push(e);
  } else if (c.charCodeAt != NaN && d.match(/[aeiou]/)) {
    b.push(String.fromCharCode(c));
  } else {
    b.push(c);
  }
 }


var testArray = [118,117,120,121,117,98,'c',97,120,106,104,116,113,114,113,120,106];

isVow(testArray);
