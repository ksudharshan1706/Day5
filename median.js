arr1 = [1,2,3,4,5]
arr2 = [11,22,33,44,55]
function median(arr1,arr2){
    arr3 = []
    x = 0
    y = 0
    median = arr1.length
    while(x<arr1.length && y < arr2.length && median > 1){
        if(arr1[x] < arr2[y]){
            x += 1
        }
        else{
            y += 1
        }
        median -= 1
    }
    return (arr1[x] + arr2[y])/2
}

console.log(`median of arr1 and arr2 is ${median(arr1,arr2)}`)