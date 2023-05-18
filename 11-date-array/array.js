const arr = ['10-02-2022', 'тест', '11/12/2023', '00/11/2022', '41/12/2023', 'tes/10/2023',
             '01/01/1970', '02-31-2022','28-02-2022','30-02-2022' ];

function prepareDates(array){
    return array
    .map(el => {
            const arrEls = el.split(/\-|\//);
            if (arrEls.length === 3){
                return arrEls.join('-');
            };
        })
    .filter(el => el !== undefined && checkDate(el));//Date.parse(el) )
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
    const year = numbDate.slice(4,8); 

    if ( month < 01 || day < 01 ||
         month > 12 || day > 31 ) {
        return false;
      }

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
        default:
            return false;
    }

    return true;
}

const arr2 = prepareDates(arr);
console.log(arr2);