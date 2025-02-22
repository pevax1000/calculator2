let num1 = 0
let num2 = 0
let tempnum = []
let operator
let result
let display = document.getElementById("display")
display.textContent = 0


const one = document.querySelector("#one")
one.addEventListener('click', (event) => {
    tempnum.push(1)
    display.textContent = tempnum.join("")

    console.log(tempnum),
    (event)
})

const two = document.querySelector("#two")
two.addEventListener('click', (event) => {
    tempnum.push(2)
    display.textContent = tempnum.join("")
    console.log(tempnum),
    (event)
})


const plus = document.querySelector("#plus")
plus.addEventListener('click', (event) => {
    operator = "+"
    if (num1 == 0) {
    num1 = parseInt(tempnum.join(""))
    tempnum = []
    }
    else {
        num2 = parseInt(tempnum.join(""))
        tempnum = []
    }
    console.log(num1),
    (event)
})

const multiply = document.querySelector("#multiply")
multiply.addEventListener('click', (event) => {
    operator = "X"
    if (num1 == 0) {
    num1 = parseInt(tempnum.join(""))
    tempnum = []
    }
    else {
        num2 = parseInt(tempnum.join(""))
        tempnum = []
    }
    console.log(num1),
    (event)
})

const subtract = document.querySelector("#subtract")
subtract.addEventListener('click', (event) => {
    operator = "-"
    if (num1 == 0) {
    num1 = parseInt(tempnum.join(""))
    tempnum = []
    }
    else {
        num2 = parseInt(tempnum.join(""))
        tempnum = []
    }
    console.log(num1),
    (event)
})

const divide = document.querySelector("#divide")
divide.addEventListener('click', (event) => {
    operator = "%"
    if (num1 == 0) {
    num1 = parseInt(tempnum.join(""))
    tempnum = []
    }
    else {
        num2 = parseInt(tempnum.join(""))
        tempnum = []
    }
    console.log(num1),
    (event)
})


const equals = document.querySelector("#equals")
equals.addEventListener("click", operate)

function operate() {
    num2 = parseInt(tempnum.join(""))
    console.log(operator)

    // if (operator === " " || num1 === result || num2 === 0) {
    //     result = 0
    // }
    if (operator === "+") {
    result = num1 + num2
    console.log(result)
    display.textContent = result
    }
    else if (operator === "X") {
        result = num1 * num2
        console.log(result)
        display.textContent = result
        }
    else if (operator === "-") {
        result = num1 - num2
        console.log(result)
        display.textContent = result
        }

     else if (operator === "%") {
            if (num2 !== 0) {
            result = num1 / num2
            console.log(result)
            display.textContent = result
            }
            else {
                display.textContent = "You no math so good?"
            }
            }

    else {
        if ((num1 == 0 & num2 == 0)) {
            display.textContent = "0"
            result = 0
        }
        else if (operator === " ") {
            result = 0
        }
    }

    tempnum = []
    num1 = result
}

const clearnow = document.querySelector("#clear")
clearnow.addEventListener("click", clear)

function clear() {
    num1 = 0
    num2 = 0
    display.textContent = "0"
    tempnum = []
    currentoperator = " "
}


const three = document.querySelector("#three")
three.addEventListener('click', (event) => {
    tempnum.push(3)
    display.textContent = tempnum.join("")
    console.log(tempnum),
    (event)
})

const four = document.querySelector("#four")
four.addEventListener('click', (event) => {
    tempnum.push(4)
    display.textContent = tempnum.join("")
    console.log(tempnum),
    (event)
})

const five = document.querySelector("#five")
five.addEventListener('click', (event) => {
    tempnum.push(5)
    display.textContent = tempnum.join("")
    console.log(tempnum),
    (event)
})

const six = document.querySelector("#six")
six.addEventListener('click', (event) => {
    tempnum.push(6)
    display.textContent = tempnum.join("")
    console.log(tempnum),
    (event)
})

const seven = document.querySelector("#seven")
seven.addEventListener('click', (event) => {
    tempnum.push(7)
    display.textContent = tempnum.join("")
    console.log(tempnum),
    (event)
})

const eight = document.querySelector("#eight")
eight.addEventListener('click', (event) => {
    tempnum.push(8)
    display.textContent = tempnum.join("")
    console.log(tempnum),
    (event)
})

const nine = document.querySelector("#nine")
nine.addEventListener('click', (event) => {
    tempnum.push(9)
    display.textContent = tempnum.join("")
    console.log(tempnum),
    (event)
})

const zero = document.querySelector("#zero")
zero.addEventListener('click', (event) => {
    tempnum.push(0)
    display.textContent = tempnum.join("")
    console.log(tempnum),
    (event)
})







// display.textContent = "0"
