const ftoc = function(tempInF) {
  let convertedTempToC = (tempInF-32)*5/9;
  if(convertedTempToC%1 !==0){
    return parseFloat(convertedTempToC.toFixed(1));
  }else{
    return convertedTempToC;
  }

};

const ctof = function(tempInC) {
  let convertedTempToF = (tempInC*(9/5))+32;
  if(convertedTempToF%1 !==0){
    return parseFloat(convertedTempToF.toFixed(1));
  }else{
    return convertedTempToF;
  }
};
ftoc(32);
ftoc(100);
ftoc(-100);
ctof(0);
ctof(73.2);
ctof(-10);
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
