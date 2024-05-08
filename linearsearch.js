
let arr = [1, 2, 3, 5, 7, 4, 3]
let element = 2;

let found = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
        found = true;
        console.log("found ");
        break;
    }
}
if (!found){
    console.log("not found");
}














// let arr = [13, 4, 8, 6, 20]

// let found=false;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i]<arr[j]){
//             let temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp;
//             found=true;
//         }
//         if(!found){
//             break;
//         }
//     }
// }
// console.log(arr);   


