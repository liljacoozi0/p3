// jshint esversion: 7
var sumEvery5th = function(n) {
  let sum = 0;
  for(let i = 1; i <= n; i++){
    if (i%5 == 0) sum += i;
}
  return sum;
};
var sumEvery7th = function(n) {
  let sum = 0;
  for(let i = 1; i <= n; i++){
    if (i%7 == 0) sum += i;
}
  return sum;
};
var sumOfProperDivisors = function(n) {
  var sum = 0;
  for (var i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
};
const countBrackets = (str) => {
    let occurrences = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '[' || str[i] === ']' || str[i] === '{' || str[i] === '}') {
            occurrences++;
        }
    }
    return occurrences;
}
