let arr=[-2,-3,4,-1,-2,1,5,-3]

let max=0;
let current=arr[0]
for(let i=0;i<arr.length;i++){
    max=max+arr[i]
    if(current<0){
        return 0;
    }
    if(max<current){
        max=current
        return max;
    }
}
console.log(max);