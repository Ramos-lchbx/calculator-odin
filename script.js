function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}

let firstNum = "";
let operator;
let secNum = "";
let aux = "";

function operate(firstNum, operator, secNum){
    if (operator === "+"){
        return add(firstNum, secNum);
    }
    if (operator === "-"){
        return subtract(firstNum, secNum);
    }
    if (operator === "*"){
        return multiply(firstNum, secNum);
    }
    if (operator === "/"){
        return divide(firstNum, secNum);
    }

}

const display = document.querySelector(".disp");
const numButtons = document.querySelectorAll(".nums");
const opButtons = document.querySelectorAll(".ops")
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");


numButtons.forEach(button => {
    button.addEventListener("click", () => addToVal(button.textContent))
})

function addToVal(val){
    aux += val;
    display.textContent = aux;
}

opButtons.forEach(button => {
    button.addEventListener("click", () => {

        if (operator){
        firstNum = operate(firstNum, operator, secNum);
        aux = "";
        operator = button.textContent;
    }

        firstNum = aux;
        aux = "";
        operator = button.textContent;
    })
    
    
})

equal.addEventListener("click", () => {
    secNum = aux;
    aux = "";
    display.textContent = operate(firstNum, operator, secNum);
})