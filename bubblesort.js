

let arr = [1, 3, 7, 3, 2, 9, 6]

for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
            found=true;
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
    if(!found){
        break;
    }
}
console.log(arr);