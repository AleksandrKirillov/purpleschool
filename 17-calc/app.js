"use strict";

// [...document.querySelectorAll(".button")].forEach(function (item) {
//     item.addEventListener("click", (event) => clickForCalculation(event));
// });

document.addEventListener("click", (event) => clickForCalculation(event));

function clickForCalculation(event) {
    const elem = event.target;
    if (elem.className !== "button") {
        return;
    }
    const input1 = document.querySelectorAll(".input")[0].value;
    const input2 = document.querySelectorAll(".input")[1].value;
    const sign = elem.value; //document.activeElement.value;
    const result = getResultCalc(input1, input2, sign);
    document.querySelector(".panel").innerText = result;
    console.log(input1);
    console.log(input2);
}

function getResultCalc(value1, value2, sign) {
    if (value1 === "" || value2 === "") {
        return "Пустые значения! Введите числа!";
    }

    if (isNaN(value1) || isNaN(value2)) {
        return "Неверный формат значений. Введите числа!";
    }

    switch (sign) {
        case "+":
            return Number(value1) + Number(value2);
        case "-":
            return value1 - value2;
        case "*":
            return value1 * value2;
        case "/":
            const resDiv = value1 / value2;
            if (resDiv === Infinity) {
                return "На ноль делить нельзя";
            }
            return resDiv;
        default:
            return "Непредвиденная функция";
    }
}
