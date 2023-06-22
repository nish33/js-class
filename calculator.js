const state = {
  deviceStatus: false,
  digits: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  operators: ["+", "-", "*", "/", "%"],
  expression: "",
  result: "",
};
const buttons = document.getElementsByClassName("button");
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
        getResult();
        input.innerText = state.result;
      default:
        state.expression += clickedBtn;
        input.innerText = state.expression;
        break;
    }
  });
}
