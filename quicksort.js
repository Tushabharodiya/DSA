let arr=[4, 5, 6, -7, 2, 1, 0];
let quickSort= (arr) => {
    if(arr.length<=1){
        return arr;
    }
    let provit = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if (provit > arr[i]) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left),provit,...quickSort(right)]
}
let res=quickSort(arr)
console.log(res);