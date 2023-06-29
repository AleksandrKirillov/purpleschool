"use strict";

// [...document.querySelectorAll(".button")].forEach(function (item) {
//     item.addEventListener("click", (event) => clickForCalculation(event));
// });

const mainElem = document.querySelector(".main-buttons");
mainElem.addEventListener("click", clickForCalculation);

function clickForCalculation(event) {
    const elem = event.target;
    if (elem.className !== "button") {
        return;
    }
    const firstValue = document.querySelectorAll(".input")[0].value;
    const secondValue = document.querySelectorAll(".input")[1].value;
    const sign = elem.value; //document.activeElement.value;
    const result = getResultCalc(firstValue, secondValue, sign);
    document.querySelector(".panel").innerText = result;
}

function getResultCalc(firstValue, secondValue, sign) {
    if (firstValue === "" || secondValue === "") {
        return "Пустые значения! Введите числа!";
    }

    if (isNaN(firstValue) || isNaN(secondValue)) {
        return "Неверный формат значений. Введите числа!";
    }

    switch (sign) {
        case "+":
            return Number(firstValue) + Number(secondValue);
        case "-":
            return firstValue - secondValue;
        case "*":
            return firstValue * secondValue;
        case "/":
            const resDiv = firstValue / secondValue;
            if (resDiv === Infinity) {
                return "На ноль делить нельзя";
            }
            return resDiv;
        default:
            return "Непредвиденная функция";
    }
}
