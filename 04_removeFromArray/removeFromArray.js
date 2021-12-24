const removeFromArray = function(arr1, ...arr2) {
    for(let i=0; i<arr2.length; i++){
      if(arr1.includes(arr2[i])){
        arr1.splice(arr1.indexOf(arr2[i]), 1);
    }else if(typeof arr2[0] =='string' && typeof +arr2[0] == 'number'){
      continue;
    }
  }
return arr1;
};
removeFromArray([1, 2, 3,4], 3);
removeFromArray([1, 2, 3,4], 3, 2);
removeFromArray([1, 2, 3,4], 7, "tacos");
removeFromArray([1, 2, 3,4], 7, 2);
removeFromArray([1, 2, 3,4], 1, 2, 3, 4);
removeFromArray(["hey", 2, 3,"ho"], "hey", 3);
removeFromArray([1, 2, 3], "1", 2);

// Do not edit below this line
module.exports = removeFromArray;
