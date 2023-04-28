const addressLat = 10;
const addressLong = 5;
const positionLat = 2;
const positionLong = 15;

// Определить расстояние по точкам
/*
    Надеюсь это не из тех заданий, где нельзя использовать
    не пройденные возможности js.
*/
let result = Math.sqrt((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2);
console.log(result); 

