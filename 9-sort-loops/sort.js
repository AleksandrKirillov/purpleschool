const arr = [1, 40, -5, 10, 0, 100, -20, 4, 3, 23, 200, -2, -5];
let helpElem = 0;

console.log(arr);
// Пузырьком
for(const index in arr) {
    for(let j = 0; j < arr.length-index-1; j++) {
        if( arr[j] > arr[j+1] ){
            helpElem = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = helpElem;
        }
        
    }
};

//Шейкерная
// let left = 0;
// let right = arr.length-1;

// while(left < right) {
//     for(let i = left ; i < right; i++) {
//         if(arr[i] > arr[i+1]){
//             helpElem = arr[i];
//             arr[i] = arr[i+1];
//             arr[i+1] = helpElem;
//         }
//     }
//     right--;

//     for(let i = right; i > left; i--){
//         if(arr[i] < arr[i-1]) {
//             helpElem = arr[i];
//             arr[i] = arr[i-1];
//             arr[i-1] = helpElem;
//         }
//     }
//     left++;
// }

console.log(arr);