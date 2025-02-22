let num1 = 0
let num2 = 0
let tempnum = []
let operator
let result
let display = document.getElementById("display")
display.textContent = 0


const one = document.querySelector("#one")
one.addEventListener('click', (event) => {
    display.textContent += one.innerHTML
    tempnum.push(1)
    
    console.log(tempnum),
    (event)
})

const two = document.querySelector("#two")
two.addEventListener('click', (event) => {
    display.textContent += two.innerHTML
    tempnum.push(2)
    console.log(tempnum),
    (event)
})


const plus = document.querySelector("#plus")
plus.addEventListener('click', (event) => {
    operator = "+"
    if (num1 == 0) {
    num1 = parseInt(tempnum.join(""))
    }
    else {
        num2 = parseInt(tempnum.join(""))
    }
    tempnum = []
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




// display.textContent = "0"
