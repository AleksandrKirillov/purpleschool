/*
    Написать код, который при передаче пользователем en, ru, de 
    выводит в консоль соответствующее привествие на указанном языке
*/
const langDefault = navigator.language.substring(0,2); 

const res = prompt('Введите язык(en, ru, de)', langDefault );

let mess;
switch(res) {
    case 'en':
        mess = 'Hello!';
        break;
    case 'ru':
        mess = 'Привет!';
        break;
    case 'de':
        mess = 'Servus!';
        break;
    default:
        mess = 'Hello! Привет! Servus!';        
}
console.log(mess);