
function CheckElement(num){
    return num > 4;
} 

function filter(array, fn = (num) => num > 2) {
    const arrayFilter = [];

   for(const el of array){
        if(!fn(el)){
            arrayFilter.push(el);
        }
   }

    return arrayFilter;
};

const testArray = [1, 2, 3, 4, 2, 5, 5, 1];

console.log(testArray);
console.log(filter(testArray));
console.log(filter(testArray, CheckElement));