var add = function(a,b){
  return a + b;
};
var subtract = function(a,b){
  return a-b;
};
var multiply = function(a,b){
  return a*b;
};
var divide = function(a,b){
  return a/b;
};
var inc = function(number){
  return number + 1;
};
var dec = function(number){
  return number - 1;
};

var makeInt = function(string){
  return parseInt(string, 10);
  // takes something like this: "56329" and turns it into a number like 56329
}
var preserveDecimal = function(string){
  return parseFloat(string);
};
// parseFloat

function happyHolidays