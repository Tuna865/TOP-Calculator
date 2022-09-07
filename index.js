// DISPLAY
const display = document.getElementById('display')
const currNum = document.querySelector('[data-curr-num]')
const prevNum = document.querySelector('[data-prev-num]')
// OPERATOR BUTTONS
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.querySelector('[data-equals]')
const backspaceButton = document.querySelector('[data-backspace]')
const clearButton = document.querySelector('[data-clear]')
// NUMBER BUTTONS
const numButtons = document.querySelectorAll('[data-num]')
// OPERATORS
const add = (x,y) => x+y
const subtract = (x,y) => x-y
const multiply = (x,y) => x*y
const divide = (x,y) => x/y

class Calculator {
    constructor(prevNum, currNum){
        this.prevNum = prevNum
        this.currNum = currNum
        // have to reset the inputs
        this.clearAll()
    }
}

function clearAll() {
    this.currOperator = ''
    this.prevOperator = ''
    this.operation = undefined
}

const calculator = new Calculator(prevNum, currNum)

backspace = () => {

}


