const reverseString = function(str) {
  let array = [...str];
  array = array.reverse();
  return array.join("");
};

reverseString('hello');
reverseString('hello there');
reverseString('123! abc!');
reverseString('');

// Do not edit below this line
module.exports = reverseString;
