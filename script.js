// This function clear all the values
function clearScreen() {
  document.getElementById("result").value = "";
}

// This function display values
function display(value) {
  document.getElementById("result").value += value;
}

//This function evaluates the expression and returns result

// function calculate() {
//   let a = document.getElementById("result").value;
//   let b = eval(a);
//   document.getElementById("result").value = b;
// }

function calculate() {
  const inputElement = document.getElementById("result");
  const expression = inputElement.value;
  const pattern = /^[\d+\-*/.\s]+$/;

  // Validate the input format
  if (!pattern.test(expression)) {
    alert("Invalid input format. Please enter a valid mathematical expression.");
    return;
  }

  const result = Function(`return ${expression}`) ();
  inputElement.value = result;
}

