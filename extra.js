// let arr = [1, 2, 3, 5, 6, 7]
// let add = 20;
// let position = 2;

// for (let i = arr.length - 1; i > 0; i--) {
//     if (arr[i] > position) {
//         arr[i+1]=arr[i]
//         if (i == position) {
//             arr[i] = add;
//         }
//     }
// }
// console.log(arr);
// let arr = [1, 2, 3, 4, 5]
// let pos = 2;

// for (let i = 0; i < arr.length-1; i++) {
//     if (arr[i] == arr[pos]) {
//         arr[i]=arr[i+1]
//     }
//     console.log(arr[i]);
// }
// console.log(arr);

//prime number

// for (let i = 0; i < 100; i++) {
//     let found=false;
//     for (let j = 2; j < 100; j++) {
//         if(i%j==0 && j!=i){
//             found=true;
//         }
//     }
//     if(!found){
//         console.log(i);
//     }
// }

// let arr=7
// let count=0;
// for(let i=2;i<arr;i++){
//     if(arr%i==0){
//        count++;
//     }
// }
// if(count==0){
//     console.log("prime");
// }else{
//     console.log("not");
// }
// console.log(arr);


// let arr=[1,2,3,4,5,6]

// for(let i=1;i<=arr.length;i++){
//    let found=false;// let count=0
//     for(let j=2;j<=i;j++){
//         if(i%j==0 && j!=i){
//          found=true //count++;
//         }
//     }
//     if(!found){//if(!count) 
//         console.log(i);
//     }
// }

//divede and marge 
// let arr = [1, 2, 3, 4, 5, 6]
// let mid;
// let a=[];
// let b=[];
// let c=[];
// if (arr.length % 2 == 0) {
//     mid = arr.length / 2;
// }else{
//     mid=arr.length/2+0.5;
// }
// console.log(mid);

// for(let i=0;i<mid;i++){
//     a[i]=arr[i]
// }
// for(let i=mid;i<arr.length;i++){
//     b[i-mid]=arr[i]
// }

// for(let i=0;i<a.length;i++){
//     c[i]=a[i];
// }
// for(let i=0;i<b.length;i++){
//     c[i+a.length]=b[i]
// }
// console.log(a);
// console.log(b);
// console.log(c);


// let arr=[-2,-3,4,-1,-2,1,5,-3]
// let max=0;
// let current=arr[0]

// for(let i=0;i<arr.length;i++){
//     current=current+arr[i]
//     if(current<0){
//         current=0;
//     }
//     if(max<current){
//         max=current;
//     }
// }
// console.log(max);


// let arr = [3, 4, 5, 6, 7, 8]
// let element = 4;
// let found=false;

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]==element){
//         found=true;
//         console.log("found");
//     }
// }
// if(!found){
//     console.log("element not found");
// }


// let arr = [3, 4, 5, 6, 7, 8, 9]

// let search = (arr, element, start, end) => {
//     let mid = (start + end) / 2;

//     if (arr[mid] == element) {
//         return true;
//     }
//     else if(arr[mid] > element) {
//         return search(arr, element, start, mid - 1)
//     } else {
//         return search(arr, element, mid + 1, end)
//     }
// }

// let res = search(arr, 5, 0, arr.length - 1)
// console.log(res);



// let arr = [6, 7, 5, 4, 3, 9]

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if(arr[j]>arr[j+1]){
//             let temp=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp;
//         }
//     }
// }
// console.log(arr);

// let arr = [6, 5, 4, 3, 7, 8, 2]

// for (let i = 0; i < arr.length; i++) {
//     let min = i;
//     for (let j = i; j < arr.length; j++) {
//         if (arr[min] > arr[j]) {
//             min = j;
//         }
//         let temp = arr[min]
//         arr[min] = arr[i]
//         arr[i] = temp;
//     }

// }
// console.log(arr);

class stackmethod {
    constructor(stack, size) {
        this.stack = [];
        this.size = 4;
    }
    add(element) {
        if (this.stack.length < this.size) {
            this.stack.push(element)
        }
    }
    travel() {
        this.stack.map((val) => {
            console.log(val);
        })
    }
    remove() {
        if (this.stack != 0) {
            this.stack.pop()
        }
    }
    lastelement() {
        console.log("last element", this.stack[this.stack.length - 1]);
    }
    firstElemnt() {
        console.log("first Element", this.stack[0]);
    }
    reverse() {
        for (let i =  this.stack.length-1; i >=0; i--) {
            console.log(this.stack[i]);
        }
    }

}
let s1 = new stackmethod();
s1.add(20);
s1.add(21);
s1.add(22);
s1.add(23);
s1.remove()
s1.travel()
s1.firstElemnt()
s1.lastelement()
s1.reverse()












