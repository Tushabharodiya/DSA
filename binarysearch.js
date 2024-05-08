let arr = [1, 2, 3, 4, 5, 6];

let search = (arr, element, start, end) => {

    let mid = (start + end) / 2;

    if (arr[mid] === element) {
        return mid;
    } else if (arr[mid] > element) {
        return search(arr, element, start, mid - 1);
    } else {
        return search(arr, element, mid + 1, end);
    }
}

let res = search(arr, 1, 0, arr.length);
console.log(res);
