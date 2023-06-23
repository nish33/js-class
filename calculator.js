const state = {
  deviceStatus: false,
  operators: {
    "+": function (a, b) {
      return a + b;
    },
    "-": function (a, b) {
      return a - b;
    },
    "*": function (a, b) {
      return a * b;
    },
    "/": function (a, b) {
      return a / b;
    },
    "%": function (a,b) {
      return a % b;
    },
  },
  precedence: {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "%": 2,
  },
  expression: "",
  result: "",
};
const buttons = document.getElementsByClassName("button");
console.log(buttons);
const screen = document.getElementById("screen");
const input = document.getElementById("input");

function changeDeviceStatus() {
  state.deviceStatus = !state.deviceStatus;
  state.deviceStatus
    ? (screen.classList.remove("off"),
      screen.classList.add("on"),
      (input.innerText = ""))
    : (screen.classList.add("off"),
      screen.classList.remove("on"),
      (input.innerText = "Click AC to turn on"));
}

function isOperator(operator) {
  return state.operators.hasOwnProperty(operator);
}
function isHigherPrecedence(op1, op2) {
  return state.precedence[op1] >= state.precedence[op2];
}

function getResult() {
  // console.log(state.expression);
  const tokens = state.expression.match(/(\d+|\+|\-|\*|\/|\%)/g);
  
  console.log(tokens);
  const output = [];
  const operatorStack = [];

  for (let token of tokens) {
    if (!isOperator(token)) {
      output.push(parseFloat(token));
    } else {
      while (
        operatorStack.length > 0 &&
        isHigherPrecedence(operatorStack[operatorStack.length - 1], token)
      ) {
        output.push(operatorStack.pop());
      }
      operatorStack.push(token);
    }
  }

  while(operatorStack.length > 0) {
    output.push(operatorStack.pop());
  }

  const evaluate = (stack) => {
    const valueStack = [];

    for (let i = 0; i < stack.length; i++) {
      const token = stack[i];

      if (!isOperator(token)) {
        valueStack.push(token);
      } else {
        const b = valueStack.pop();
        const a = valueStack.pop();
        const result = state.operators[token](a, b);
        valueStack.push(result);
      }
    }

    return valueStack.pop();
  };
  console.log(output);
  return evaluate(output);
}

for (btn of buttons) {
  btn.addEventListener("click", function (e) {
    const clickedBtn = e.target.dataset.value;
    if (clickedBtn !== "onOff" && !state.deviceStatus) return;

    switch (clickedBtn) {
      case "onOff":
        changeDeviceStatus();
        state.expression = "";
        e.target.innerText = state.deviceStatus ? "OFF" : "ON";
        break;
      case "clear":
        state.expression = "";
        input.innerText = state.expression;
        break;
      case "backspace":
        state.expression = state.expression.slice(
          0,
          state.expression.length - 1
        );
        input.innerText = state.expression;
        break;
      case "=":
        state.result = getResult();
        input.innerText = state.result;
        state.expression = state.result;
        break;
      default:
        state.expression += clickedBtn;
        input.innerText = state.expression;
        break;
    }
  });
}
