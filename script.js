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

  // Validate the input format
  const pattern = /^[\d+\-*/.\s]+$/;
  if (!pattern.test(expression)) {
    alert("Invalid input format. Please enter a valid mathematical expression.");
    return;
  }

  // Step 4: Parse and evaluate the expression
  try {
    const result = Function(`return ${expression}`)();;
  } catch (error) {
    alert("Error evaluating the expression. Please check your input.");
    return;
  }

  inputElement.value = result;
}
