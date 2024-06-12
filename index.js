// index.js
function add(a, b) {// 加
  return a + b;
}

function subtract(a, b) { // 减
  return a - b;
}

function multiply(a, b) { // 乘
}

function divide(a, b) { // 除
  if (b === 0) {
    throw new Error("不允许除以零！");
  }
  return a / b;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide
};
