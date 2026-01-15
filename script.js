function add(a, b){
    let result = +a + +b;
    let rounded = Math.round(result * 100000) / 100000;
    return rounded;
}
function subtract(a, b){
    let result = +a - +b;
    let rounded = Math.round(result * 100000) / 100000;
    return rounded;
}
function multiply(a, b){
    let result = +a * +b;
    let rounded = Math.round(result * 100000) / 100000;
    return rounded;
}
function divide(a, b){
    if ( b === "0" ) {return "not allowed"}
    else {
        let result = +a / +b;
        let rounded = Math.round(result * 100000) / 100000;
        return rounded;
    }
}

let firstNum = "";
let operator;
let secNum = "";
let aux = "";
let isResult = false;

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
    if (isResult === true && !operator) {
        console.log("isResult true!")
        clearEverything();
        isResult = false;
    }
    aux += val;
    display.textContent = aux;
}

opButtons.forEach(button => {
    button.addEventListener("click", () => {

        if (operator){
        secNum = aux;
        aux = "";
        firstNum = operate(firstNum, operator, secNum);
        secNum = "";
        display.textContent = firstNum;
        operator = button.textContent; 
        console.log(firstNum, operator, secNum);
    }
        else {
        firstNum = aux;
        aux = "";
        operator = button.textContent;
        console.log(`operator is ${operator}`);
    }

    })
    
    
})

equal.addEventListener("click", () => {
    if ( !operator ) {
        console.log("operator not defined");
        return;
    }
    else if ( operator && aux === "" ){
        console.log("operator defined and aux empty");
        secNum = firstNum;
        display.textContent = operate(firstNum, operator, secNum);
        aux = display.textContent;
        operator = undefined;

        isResult = true;
    }
    else {
        console.log("Normal values");
        secNum = aux;
        aux = "";
        display.textContent = operate(firstNum, operator, secNum);
        aux = display.textContent;
        operator = undefined;

        isResult = true;
    }

})

clear.addEventListener("click", () => clearEverything())

function clearEverything(){
    firstNum = "";
    operator = undefined;
    secNum = "";
    aux = "";
    display.textContent = "";
}
