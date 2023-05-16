const arr = ['10-02-2022', 'тест', '11/12/2023', '00/11/2022', '41/12/2023', 'tes/10/2023'];

function prepareDates(array){
    return array
    .map(el => {
            const arrEls = el.split(/\-|\//);
            if (arrEls.length === 3){
                return arrEls.join('-');
            };
        })
    .filter(el => el !== undefined && Date.parse(el) )
// Воспользовался объектом Date, т.к. не вижу большого смысла создавать собственный велосипед
}

const arr2 = prepareDates(arr);
console.log(arr2);