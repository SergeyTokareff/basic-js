const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.addition === undefined) {
    options.addition = '';
    options.additionRepeatTimes = 0;
    options.additionSeparator = '';
  }
  
  if (options.separator === undefined) {
    options.separator = '+';
  }

  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }

    let newAddition = options.addition;
      
    for (let j = 0; j < options.additionRepeatTimes - 1; j++) {
        newAddition += options.additionSeparator + options.addition;
    }
    
    let newStr = str + newAddition;
    let totalStr = newStr;
    for (let i = 0; i < options.repeatTimes - 1; i++){       
      totalStr += options.separator + newStr;    
    }
    
  
    return totalStr;
};
  