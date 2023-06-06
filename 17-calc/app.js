"use strict";


function submitForm(sign) {
    const input1 = document.querySelectorAll('.input')[0].value;
    const input2 = document.querySelectorAll('.input')[1].value;

    const result = getResultCalc(input1, input2, sign);

    document.querySelector('.panel').innerText = result;
    console.log(input1);
    console.log(input2);
};

function getResultCalc(value1, value2, sign) {
    if (value1 === '' || value2 === '') {
        return 'Пустые значения! Введите числа!';
    }

    if (isNaN(value1) || isNaN(value2)) {
        return 'Неверный формат значений. Введите числа!';
    }

    switch (sign) {
        case '+':
            return Number(value1) + Number(value2);
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':

            const resDiv = value1 / value2;
            if (resDiv == Infinity) {
                return 'На ноль делить нельзя';
            }
            return value1 / value2;
        default:
            return 'Непредвиденная функция';
    }
}
