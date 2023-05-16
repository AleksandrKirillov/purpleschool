
function deleteArr(num){
    return num > 4;
} 

function filter(array, fn = (num) => num > 2) {
    const arrayFilter = new Array(...array);
    
    for(let i = arrayFilter.length-1; i >= 0 ; i--){
        if(fn(arrayFilter[i])) {
            arrayFilter.splice(i,1);
        };
    };

    return arrayFilter;
};

const testArray = [1, 2, 3, 4, 2, 5, 5, 1];

console.log(testArray);
console.log(filter(testArray));
console.log(filter(testArray, deleteArr));