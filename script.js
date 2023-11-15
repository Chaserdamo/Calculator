// Selecting all elements with the class "num-button" and storing them in the variable btns
let btns = document.querySelectorAll(".num-button");

// Selecting all elements with the class "button" and storing them in the variable allBtns
let allBtns = document.querySelectorAll(".button");

// Selecting the element with the ID "result-box" and storing it in the variable resultBox
let resultBox = document.querySelector("#result-box");

// Selecting the element with the ID "clear" and storing it in the variable clearBtn
let clearBtn = document.querySelector('#clear');

// Selecting the element with the ID "total" and storing it in the variable total
let total = document.querySelector("#total");

// Creating spreads of the NodeList variables btns and allBtns
let btnSpread = [...btns];
let allBtnSpread = [...allBtns];

// Adding a click event listener to each element in btnSpread
btnSpread.forEach((button, i) => {
  button.addEventListener("click", () => {
    // Checking if the resultBox content is "0" and resetting it if true
    if (resultBox.innerHTML == "0") {
      resultBox.innerHTML = "";
    }

    // Getting the innerHTML of the clicked button and appending it to the resultBox
    let value = btns[i].innerHTML;
    resultBox.innerHTML += value;
  });
});

// Function to evaluate a mathematical expression using the Function constructor
function evaluate(fn) {
    return new Function('return ' + fn)();
}

// Adding a click event listener to the element with the ID "total"
total.addEventListener('click', ()=> {
    // Storing all the content of resultBox in the variable allInputs
    let allInputs = resultBox.innerHTML;

    // Evaluating the mathematical expression and updating the resultBox
    resultBox.innerHTML = evaluate(allInputs);

    // Logging the result of the evaluation to the console
    console.log(evaluate(allInputs));
});

// Adding a click event listener to the clearBtn to reset the resultBox to "0"
clearBtn.addEventListener('click', ()=> {
    resultBox.innerHTML = "0";
});
