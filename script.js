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
let operator = "";
let secNum = "";

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

if (operator == undefined){
    numButtons.forEach(button => {
        button.addEventListener("click", () => {
            firstNum += button.textContent;
            console.log("firstNum:" + firstNum);
        })
    })
}


if (operator != undefined){
    numButtons.forEach(button => {
        button.addEventListener("click", () => {
            secNum += button.textContent;
            console.log("secNum:" + secNum);
        })
    })
}

opButtons.forEach(button => {
    button.addEventListener("click", () => {
        operator = button.textContent;
        console.log(operator);
        console.log(operator == undefined);
    })
})










console.log(operate(5, "*", 6));