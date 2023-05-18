/*
    Допустим, что стоит простая проверка на кол-во символов ( не меньше 8 )
*/
function crypto(password,){
    const [...cryptoPass] = password.split('').reverse();
    const anyElem = cryptoPass.splice(2, 4);
    cryptoPass.push(...anyElem);
    
    return cryptoPass.join('');
};
 
function uncrypto(password){
    const uncryptoPass = [...password];
    const anyElem = uncryptoPass.splice(-4);
    uncryptoPass.splice(2,0,...anyElem);

    return uncryptoPass.reverse().join('');
}

function check(cryptoPass, justPass) {
    if (uncrypto(cryptoPass) === justPass ) {
        return true;
    };
    return false;
}

const changePass = crypto('Pa2ssword');
console.log(changePass)

console.log(check(changePass, 'Pa2ssword'));
console.log(check(changePass, 'wrong'));
