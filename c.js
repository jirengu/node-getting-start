// c.js
//exports = module.exports  

function sum() {
  return [...arguments].reduce((v1, v2) => v1 + v2)
}

module.exports = sum
//module.exports.sum = sum 
//exports.sum = sum


//exports = sum     //错误







