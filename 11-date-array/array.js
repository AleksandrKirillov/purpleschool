const arr = ['10-02-2022', 'тест', '11/12/2023', '00/11/2022', '12/30/2023', 'tes/10/2023',
              '01/01/1970', '02-31-2022','28-02-2022','30-02-2022' ];

function prepareDates(array){
    return array
    .map(el => {
            const arrElsDash = el.split('-');
            if (checkLength(arrElsDash)){
                return arrElsDash.join('-');
            };

            const arrElsSlash = el.split('/');
            if(checkLength(arrElsSlash)){
                [arrElsSlash[0], arrElsSlash[1]] = 
                [arrElsSlash[1], arrElsSlash[0]];
                return arrElsSlash.join('-');
            }
        })
    .filter(el => el !== undefined && checkDate(el));//Date.parse(el) )
};

function checkLength(array){
    if (array.length === 3 && 
        array[0].length === 2 &&
        array[1].length === 2 &&
        array[2].length === 4 ) {
            return true;
        };
    return false;
}
 
function checkDate(date) {
    if (!date) {
        return false;
    };

    const numbDate = date.replaceAll('-','');
    if(isNaN(numbDate)){
        return false; 
    }

    const day = numbDate.slice(0,2);
    const month = numbDate.slice(2,4);
    const year = numbDate.slice(4); 

    switch(month){ 
        case '01':
        case '03':
        case '05':
        case '07':
        case '08':
        case '10': 
        case '12':
            if(day > 31){
                return false;
            }
            break;
        case '04':
        case '06':
        case '09':
        case '11':
            if(day > 30){
                return false;
            }
            break;
        case '02':
            if (year % 4 === 0){
                if(year % 100 === 0 && year % 400 !== 0 ){
                    if (day > 28) {
                        return false;
                    }
                } else if ( day > 29) {
                    return false;
                }
            } else if(day > 28){
                return false;
            }
            break;
        default:
            return false;
    }

    return true;
}

console.log(arr);
const arr2 = prepareDates(arr);
console.log(arr2);