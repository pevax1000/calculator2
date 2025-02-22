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

const equals = document.querySelector("#equals")
equals.addEventListener("click", operate)

function operate() {
    num2 = parseInt(tempnum.join(""))

    console.log(operator)
     if (operator === "+") {
    result = num1 + num2
    console.log(result)
    display.textContent = result
    }
    else {
     console.log("notplus")
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




// display.textContent = "0"
