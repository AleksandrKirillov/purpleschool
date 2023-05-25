
function prepareQuery(obj){
    let resultString = '';
    for( const key in obj ){
        if(resultString !== '') {
            resultString += '&';
        };
        resultString += key + '=' + obj[key];
    }
    return resultString;
}

const objectTest = {
    search: 'Вася',
    take: 10,
}

console.log(prepareQuery(objectTest));