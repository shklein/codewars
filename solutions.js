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


var testArray = [101,121,110,113,113,103,121,121,101,107,103];

isVow(testArray);

//positive-negative
var pnArray = [];

function countPositivesSumNegatives(input) {

  var pos = 0;
  var neg = 0;
  for (var i = 0; i <= input.length; i++) {
    if (input[i] > 0) {
    pos++;
   } else if (input[i] < 0) {
     neg += input[i];
     }
    }
    pnArray.push(pos);
    pnArray.push(neg);
    console.log(pnArray);
}

var testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];

countPositivesSumNegatives(testData);

//syntax errors
function myFirstKata(a, b) {
  if (typeof(a) != "number" || typeof(b) != "number") {
    console.log(false);
  } else {
    console.log((a % b) + (b % a));
  }
}

myFirstKata(3,5);
