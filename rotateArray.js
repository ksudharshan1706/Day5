arr1 = [1,2,3,4,5,6,7,8,9]
k = 1
const rotateArray = (arr, k) => {
    arr.concat(arr).slice(k, k+arr.length);
    return arr
}
console.log(rotateArray(arr1,k))
console.log(arr1)