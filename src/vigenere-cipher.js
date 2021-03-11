const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (type = true) {
    this.type = type;
    this.alphabet = ['a', 'b', 'c', 'd' ,'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  } 
  
  encrypt(message, key) {
    let encResult = [];
    let a;
    for (let i = 0, j = 0; i < message.length; i++, j++) {
      if  (j >= key.length) {
        j = 0;
      }
      
      if (this.alphabet.indexOf(message[i].toLowerCase()) === -1) {
        encResult.push(message[i]);        
        j--;
      } else {
         a = this.alphabet.indexOf(message[i].toLowerCase()) + this.alphabet.indexOf(key[j].toLowerCase()); 
        if (a > 25) {
          a = a - 25 - 1;
        }
          encResult.push(this.alphabet[a].toUpperCase());        
      }      
    }
    
    if (this.type === false) {
      encResult.reverse();
    }
    
    return encResult.join('');    
  }    
    
  decrypt(message, key) {
    let decResult = [];
    let b;
    for (let i = 0, j = 0; i < message.length; i++, j++) {
      if  (j >= key.length) {
        j = 0;
      }
      
      if (this.alphabet.indexOf(message[i].toLowerCase()) === -1) {
        decResult.push(message[i]);
        j--;
      } else {        
         b =  this.alphabet.indexOf(message[i].toLowerCase()) - this.alphabet.indexOf(key[j]); 
        
        if (b < 0) {
          
          b = this.alphabet.length -  Math.abs(b);
        }
          decResult.push(this.alphabet[b].toUpperCase());        
      }      
    }
    
    if (this.type === false) {
      decResult.reverse();
    }
    
    return decResult.join('');
  }
}

module.exports = VigenereCipheringMachine;
