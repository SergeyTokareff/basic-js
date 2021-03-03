const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chaines: [],
  getLength() {
    return this.chaines.length;
  },
  addLink(value) {
    if (value === undefined) {
      value = " ";
    }
    this.chaines.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position >= 1 && position <= this.chaines.length){
      this.chaines.splice(position - 1, 1);
      return this;
    } 
      this.chaines = [];
      throw new Error();
    
  },
  reverseChain() {
    this.chaines.reverse();
    return this;
  },
  finishChain() {
    let finishChain = this.chaines.join("~~");
    this.chaines = [];
    return finishChain;
  }
};

module.exports = chainMaker;
