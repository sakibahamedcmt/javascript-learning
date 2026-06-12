// Problem 1: Sum of Array
// let numbers = [10, 20, 30, 40, 50];
// 👉 সব number যোগ করো (loop use করো)

let numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i<numbers.length; i++){
    sum = sum + numbers[i];
}
console.log(sum);


// Problem 2: Find Max Number
// 👉 array থেকে biggest number বের করো
// let numbers = [5, 10, 99, 3, 25];
let max = numbers[0];

for (let i = 0; i<numbers.length; i++){
    if (numbers[i] > max){
        max = numbers[i];
    }
}
console.log(max);


// শুধু even number print করো

// let numberss = [1,2,3,4,5,6,7,8,9,10];

// for (let i = 0; i<numberss.length; i++){
//     if (numberss[i] % 2 === 0){
//         console.log(numberss[i]);
//     }
// }


let numberss = [1,2,3,4,5,6,7,8,9,10];

for (let num of numberss){
    if (num % 2 === 0){
        console.log(num);
       }
}