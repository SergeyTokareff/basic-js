const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = [...arr]; 
  
    
   if (!Array.isArray(newArr)) {
    throw new Error('Error!');
  }

  if (newArr === undefined || newArr === []) {
    return [];
  }
  
  newArr = newArr.filter((item, index) => newArr.indexOf(item) === index);

	for (let i = 0; i < newArr.length; i++) {  
     if (newArr[i] === '--double-next') {
       newArr.splice(i, 1, i + 1);
      } else if (newArr[i] === '--double-prev') {
        newArr.splice(i, 1, i);        
      } else if (newArr[i] === '--discard-next') {
        newArr.splice(i, 2);
      } else if (newArr[i] === '--discard-prev') {        
        if (i > 0) {
          newArr.splice(i, 2);
        } else {
          newArr.shift();
        }                 
		  }	else if (newArr[i] === undefined || newArr[i] === 0) {
      newArr.splice(i, 1);
    }  
	}
	return newArr;
  
};
  
