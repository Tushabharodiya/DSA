let arr = [1, 2, 3, 4, 5, 6];

let search = (arr, element, start, end) => {

    let mid = (start + end) / 2;

    if (arr[mid] === element) {
        return mid; // Element found at mid index
    } else if (arr[mid] > element) {
        return search(arr, element, start, mid - 1); // Search left half
    } else {
        return search(arr, element, mid + 1, end); // Search right half
    }
}

let res = search(arr, 3, 0, arr.length - 1);
console.log(res); // Output: 2 (index of element 3 in the array)
