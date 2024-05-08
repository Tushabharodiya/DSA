
//add new element
// let arr = [1, 2, 3, 4, 8, 9]

// let position = 2;
// let add = 20;

// for (let i = arr.length-1 ;i >=position;  i--) {
//     arr[i+1] =arr[i]
//     if (i==position) {
//         arr[position]=add
//     }
// }
// console.log(arr);


//remove element

let arr = [1, 2, 3, 4, 5]

let pos = 2;

for (let i = 0;i<arr.length-1;i++) {
    if (arr[i] == arr[pos]) {
        arr[i] = arr[i+1];
    }
    console.log(arr[i]);
}



//update array element


// let arr = [1, 2, 3, 4, 5, 6]

// let newelement = 20;
// position = 3;

// for (let i = 0; i < arr.length; i++) {
//         if (i == position - 1) {
//                 arr[i] = newelement;
//         }
// }
// console.log(arr);

//3.prime number
// for (let i = 1; i <= 100; i++) {
//     let found = false;
//     for (let j = 2; j <= i; j++) {
//         if (i % j == 0 && j != i) {
//             found = true;
//         }
//     }
//     if (!found) {
//         console.log(i);
//     }
// }





// let arr = [-1,4,7,8,5,4,3]
// let provit=arr[arr.length-1]

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (provit > arr[j]) {
//             let temp = provit;
//             provit = arr[j];
//             arr[j] = temp;
//         } else {
//             if (provit < arr[j]) {
//                 if (arr[j] > arr[j + 1]) {
//                     let temp = arr[j]
//                     arr[j] = arr[j + 1]
//                     arr[j + 1] = temp
//                 }
//             }
//         }
//     }
// }
// console.log(arr);
