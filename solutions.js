function twoSort(s) {
  s.sort();
  var string = s[0];
  var array = [];
  for (var i = 0; i < string.length; i++) {
      array.push(string[i]);
}

return array.join('***');
}

function greet(name){
  if(name === "Johnny")
    return "Hello, my love!";
  return "Hello, " + name + "!";
}
