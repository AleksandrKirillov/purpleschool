
const testCard = '4561-2612-1234-5467';


const checkCardMoon = (card = '') => {
    const newCard = card.replaceAll('-','').split('');
    let totalSum = 0;

    for( const [index, el] of newCard.entries()){
        if (index % 2 === 0){
            let cur = el * 2;
            cur > 9 ? totalSum += cur - 9 : totalSum += Number(cur);
        } else {
            totalSum += Number(el);
        }
    }

    return totalSum % 10 === 0;
};

console.log(checkCardMoon(testCard));