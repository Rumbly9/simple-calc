// This section is for digit variables-------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const zero = document.querySelector("#zero")
const comma = document.querySelector("#comma")

// This section is for operator variables-------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")
const mult = document.querySelector("#mult")
const divd = document.querySelector("#divd")
const equal = document.querySelector("#equal")
const reset = document.querySelector("#reset")
const ans = document.querySelector("#ans")

// This section is for the display-input-result variables-------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

const input = document.querySelector("#inputs")
input.addEventListener("click", vanish)
function vanish() {
  if (input.value === "If using this input via keyboard, use Enter key instead.") {
    input.value = "";
  }
}
const result = document.querySelector("#result")
const formula = document.querySelector("#formula")

// This is variables for data storage (in array)-------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

const data = []
const ansData = []
const inputData = []
const operators = ["+", "-", "*", "/"]

// Function to print at formula section-------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

const click7 = seven.addEventListener("click", function(show7){
  input.value += 7;
  formula.innerText += 7;
  data.push(7);
})
const click8 = eight.addEventListener("click", function(show8){
  input.value += 8;
  formula.innerText += 8;
  data.push(8);
})
const click9 = nine.addEventListener("click", function(show9){
  input.value += 9;
  formula.innerText += 9;
  data.push(9);
})
const click4 = four.addEventListener("click", function(show4){
  input.value += 4;
  formula.innerText += 4;
  data.push(4);
})
const click5 = five.addEventListener("click", function(show5){
  input.value += 5;
  formula.innerText += 5;
  data.push(5);
})
const click6 = six.addEventListener("click", function(show6){
  input.value += 6;
  formula.innerText += 6;
  data.push(6);
})
const click1 = one.addEventListener("click", function(show1){
  input.value += 1;
  formula.innerText += 1;
  data.push(1);
})
const click2 = two.addEventListener("click", function(show2){
  input.value += 2;
  formula.innerText += 2;
  data.push(2);
})
const click3 = three.addEventListener("click", function(show3){
  input.value += 3;
  formula.innerText += 3;
  data.push(3);
})
const click0 = zero.addEventListener("click", function(show0){
  input.value += 0;
  formula.innerText += 0;
  data.push(0);
})
const clickComma = comma.addEventListener("click", function(showComma){
  input.value += ".";
  formula.innerText += ".";
  data.push(".");
})

// this is functions for operational inputs -------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

const clickReset = reset.addEventListener("click", function(showReset){
  input.value = "";
  formula.innerText = "";
  result.innerText = "";
  data.splice(0, data.length);
  ansData.splice(0, data.length);
})
const clickPlus = plus.addEventListener("click", function(showPlus){
  input.value += "+";
  formula.innerText += "+";
  data.push("+");
})
const clickMinus = minus.addEventListener("click", function(showMinus){
  input.value += "-";
  formula.innerText += "-";
  data.push("-");
})
const clickMult = mult.addEventListener("click", function(showMult){
  input.value += "×";
  formula.innerText += "×";
  data.push("*");
})
const clickDivd = divd.addEventListener("click", function(showDivd){
  input.value += "÷";
  formula.innerText += "÷";
  data.push("/");
})
const clickEqual = equal.addEventListener("click", function(showEqual){
  result.innerText = eval(data.join(""));
  ansData.unshift(eval(data.join("")));
  data.splice(0, data.length);
  formula.innerText = "";
  input.value = "";
})
const clickAns = ans.addEventListener("click", function(showAns){
  input.value += ansData[0];
  formula.innerText += ansData[0];
  data.push(ansData[0]);
})
// This is function for Enter keypress event inside input------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

input.addEventListener("keypress", function(enterEvent){
  if (enterEvent.key === "Enter") {
    enterEvent.preventDefault();
    data.splice(0, data.length);
    data.push(input.value);
    equal.click();
  }
})

// This is function for Backspace keypress event inside input--------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

// window.addEventListener("keypress", function(bckspaceEvent){
//   if (bckspaceEvent.key === "Escape") {
//     bckspaceEvent.preventDefault();
//     input.value = "";
//     formula.innerText = "";
//     result.innerText = "";
//     data.splice(0, data.length);
//   }
// })
