const repeatString = function(string, num) {

  for(let i =0; i<=num; i++){
    return  string.repeat(num);
  }
  if(num<0){
    return "ERROR"
  }
};
repeatString('hey', 3);
repeatString('hey', 10);
repeatString('hey', 1);
repeatString('hey', 0);
repeatString('hey', -1);

repeatString('hey', 10).match(/((hey))/g).length;
repeatString('', 10);


// Do not edit below this line
module.exports = repeatString;
