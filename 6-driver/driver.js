const hasLicense = true;
const age = 18;
const isDrunk = false;

console.log(`Пользователь ${hasLicense && age >= 18 && !isDrunk ? '' : 'не'} может вожить`);