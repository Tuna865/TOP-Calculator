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
        this.clearAll()
    }
}
const calculator = new Calculator(prevNum, currNum)

function clearAll() {
    this.currOperator = ''
    this.prevOperator = ''
    this.operation = undefined
}


function backspace() {
    this.currOperator = this.currOperator.toString().slice(0, -1) 
}

function updateDisplay(){
    if(this.operation != null){
        this.prevNum.innerText = `${this.getDisplayNum(this.prevOperator)} ${this.operation}`
    }
}

function evaluate(){
    let result
    const previous = parseFloat(this.prevOperator)
    const current = parseFloat(this.currOperator)
    if(isNaN(previous) || isNaN(current)){
        return
    }
    switch (this.operation){
        // these can be done more simply but this is cool 
        case '+':
            result = add(previous,current)
            break
        case '-':
            result = subtract(previous,current)
            break
        case 'x':
            result = multiply(previous,current)
            break
        case '÷':
            result = divide(previous,current)
            break
        default: 
            return
    }
    this.currOperator = result
    this.operation = undefined
    this.prevOperator = ''
}

function appendNumber(num) {
    // prevents duplicate periods/decimal points
    if(num === '.' && this.currOperator.includes('.')){
        return
    }
    this.currOperator = this.currOperator.toString() + num.toString()
}

function chooseOperation(operation){
    if(this.currOperator === ''){
        return
    }
    if(this.prevOperator === ''){
        this.evaluate()
    }
    this.operation = operation
    this.prevOperator = this.currOperator
    this.currOperator = ''
}

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        // corresponding number comes from the html in the button itself
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

// same as number buttons 
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay
    })
})

equalsButton.addEventListener('click', button => {
    calculator.evaluate()
    calculator.updateDisplay()
})

clearButton.addEventListener('click', () =>{
    calculator.clearAll()
    calculator.updateDisplay()
})
backspaceButton.addEventListener('click', () =>{
    calculator.backspace()
    calculator.updateDisplay()
})