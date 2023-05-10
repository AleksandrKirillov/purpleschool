function converterCurrency(sum, currencyFrom, currencyTo) {
    if (currencyFrom === currencyTo) {
        return sum;
    };

    if(getRate(currencyFrom) === null || getRate(currencyTo) === null){
        return null;
    }
    
    let conv;

    if ( currencyFrom != 'RUB' ){
        conv = sum * getRate(currencyFrom);
        return conv/getRate(currencyTo);
    };

    if ( currencyTo != 'RUB' ) {
        conv = sum/getRate(currencyTo);
        return conv * getRate(currencyFrom);
    };
};

function getRate(currency) {
    switch(currency) {
        case 'USD': 
            return 70;
        case 'EUR':
            return 80;
        case 'RUB':
            return 1;
        default: 
            return null;
    }
};

const currencyFrom = 'EUR';
const currencyTo = 'RUB';
const amount = 100;

console.log(converterCurrency(amount, currencyFrom, currencyTo) + ` ${currencyTo}`);