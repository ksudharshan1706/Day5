arr = [1,2,3,4,5,6,7,8,9]
// function sumofvaluesinArr(arr){
//     console.log(using recursion)
//     if (arr.length == 0)
//         return 0
//     return arr[0] + sumofvaluesinArr(arr.slice(1)) 
// }

// function sumofvaluesinArr(arr){
//     console.log("anonymous function")
//     sum = 0
//     for(var x = 0;x<arr.length;x++){
//         sum += arr[x]
//     }
//     return sum
// }

let sumofvaluesinArr = () =>{
    //console.log("Arrow function")
    sum = 0
    for(var x = 0;x<arr.length;x++){
        sum += arr[x]
    }
    return sum
}

console.log(sumofvaluesinArr(arr))