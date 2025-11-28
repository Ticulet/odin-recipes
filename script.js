const calculator = {
  add: function (a, b) {
    return a + b;
  },

  substract: function (a, b) {
    return a - b;
  },

  multiply: function (a, b) {
    return a * b;
  },

  divide: function (a, b) {
    if (b === 0) {
      alert("IMPOSSIBLE");
    } else {
      return a / b;
    }
  },
};

let operator = "";
let num1 = "";
let num2 = "";

function operate(operator, a, b) {
  if (operator === "+") {
    return calculator.add(a, b);
  } else if (operator === "-") {
    return calculator.substract(a, b);
  } else if (operator === "*") {
    return calculator.multiply(a, b);
  } else if (operator === "/") {
    return calculator.divide(a, b);
  }
}

const calculatorButtonContainer = document.querySelector(
  ".calculator-buttons-container"
);
const display = document.querySelector("#display");

let shouldResetDisplay = false;

calculatorButtonContainer.addEventListener("click", (e) => {
  const buttonValue = e.target.textContent;

  if (e.target.classList.contains("calc-num-btn")) {
    if (shouldResetDisplay) {
      display.value = "";
    }
    shouldResetDisplay = false;
    display.value = display.value + buttonValue;
  }
  if (e.target.classList.contains("calc-op-btn")) {
    if (num1 && operator) {
      num2 = display.value;
      let result = operate(operator, Number(num1), Number(num2));
      display.value = result;
      num1 = result;
    } else {
      num1 = display.value;
    }

    operator = e.target.textContent;
    display.value = num1 + operator;

    shouldResetDisplay = true;
  }
  if (e.target.classList.contains("calc-equals-btn")) {
    num2 = display.value;
    if (num1 != "" && operator != "") {
      let result = operate(operator, Number(num1), Number(num2));
      display.value = result;

      num1 = result;
      num2 = "";
      operator = "";
      shouldResetDisplay = true;
    }
  }
  if (e.target.classList.contains("calc-clear-btn")) {
    display.value = "";
    num1 = "";
    num2 = "";
    operator = "";
  }
});
