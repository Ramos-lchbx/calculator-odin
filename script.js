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
    if ( b === "0" ) {
        firstNum = "";
        operator = undefined;
        secNum = "";
        aux = "";
        return "NUH-UH"
    }
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
let isDecimal = false;

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
const opButtons = document.querySelectorAll(".ops");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const point = document.querySelector(".point");
const del = document.querySelector(".del");
let operatorArr = [ "/", "*", "-", "+" ]

document.addEventListener("keypress", (key) => {
    console.log(key.key)
    if (+key.key >= 0 && +key.key <= 9){
    addToVal(key.key);
    }
    if (operatorArr.includes(key.key)){
        operating(key.key);
    }
    if (key.key === "="){
        
    }
})

del.addEventListener("click", () => {
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
    aux = aux.substring(0, aux.length - 1);
})

point.addEventListener("click", () => {
    console.log("point!")
    isDecimal = true
    point.disabled = true;

    if (isResult === true && !operator) {
        console.log("isResult true!")
        clearEverything();
        point.disabled = true;
        isResult = false;
    }

    aux += point.textContent;
    display.textContent = aux;

});

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
    button.addEventListener("click", () => operating(button.textContent)) 
})

function operating(op){
    if (operator){
        secNum = aux;
        aux = "";
        firstNum = operate(firstNum, operator, secNum);
        secNum = "";
        display.textContent = firstNum;
        if (display.textContent === "NUH-UH") {firstNum = 0
            console.log("HEYYYY")
        }
        operator = op; 
        console.log(firstNum, operator, secNum);

        point.disabled = false;
    }
        else {
        firstNum = aux;
        aux = "";
        operator = op;
        console.log(`operator is ${operator}`);

        point.disabled = false;
    }
}

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
        point.disabled = false;
    }
    else {
        console.log("Normal values");
        secNum = aux;
        aux = "";
        display.textContent = operate(firstNum, operator, secNum);
        if (operator != "/" && secNum != 0) {aux = display.textContent}
        operator = undefined;

        isResult = true;
        point.disabled = false;
    }

})

clear.addEventListener("click", () => clearEverything())

function clearEverything(){
    firstNum = "";
    operator = undefined;
    secNum = "";
    aux = "";
    display.textContent = "";
    point.disabled = false;
}
