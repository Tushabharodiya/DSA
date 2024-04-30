//1.marge in new array with sorted
// let arr = [1,4, 3, 5, 2]
// let arr2 = [7, 9, 8, 6, 10]
// let arr3 = [];

// for (let i = 0; i < arr.length; i++) {
//    arr3[i] = arr[i];
// }
// for (let i = 0; i < arr2.length; i++) {
//    arr3[arr.length + i] = arr2[i]
// }

// for (let i = 0; i < arr.length + arr2.length; i++) {
//    for (let j = 0; j < arr.length + arr2.length;j++) {
//       if (arr3[i] < arr3[j]) {
//          let temp = arr3[i]
//          arr3[i] = arr3[j]
//          arr3[j] = temp;
//       }
//    }
// }
// console.log(arr3);


//2. maximum sum in array
// let arr = [1, 2,-2, 3, 4, 5, 6]
// let sum;
// let max=0;
// for (let i = 0; i < arr.length-1; i++) {
//     sum = 0
//     for (let j = 0; j < arr.length; j++) {

//         sum = arr[j]+sum;
//     }
//     if(max<sum){
//         max=sum;
//     }
// }
// console.log(max);



// 3.string convert one-one character and reverse
let arr = "tusha"

let b = []
let c=[]

for (let i = 0; i < arr.length; i++) {
    b[i] = arr[i]
}
console.log(b);

for(let i=b.length-1;i>=0;i--){
   c[i]=b[b.length-i-1]
}
console.log(c);




//4.divide array

// let arr = [1, 2, 3, 4, 5]
// let b1 = []
// let c1 = []
// let d1=[]
// let mid;

// if (arr.length % 2 == 0) {
//     mid = (arr.length) / 2;
// } else {
//     mid = (arr.length) / 2 + 0.5
// }

// for (let i = 0; i < mid; i++) {
//     b1[i] = arr[i]
// }
// console.log(b1);

// for (let i = mid; i < arr.length; i++) {
//     c1[i-mid]=arr[i]
// }
// console.log(c1);

// for(let i=0;i<b1.length;i++){
//     d1[i]=b1[i]
// }
// for (let i = 0; i < c1.length; i++) {
//     d1[i+b1.length]=c1[i];
// }
// console.log(d1);



