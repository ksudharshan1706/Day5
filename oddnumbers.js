arr = [1,2,3,4,5,6,7,8,9]
// function oddNumbers(arr){
//    console.log("Anonymous Function")
//     for(var x = 0;x<arr.length;x++){
//         if(arr[x]%2 != 0){
//             console.log(arr[x])
//         }
//     }
// }

let oddNumbers = (arr) => {
    console.log("Arrow Function")
    for(var x = 0;x<arr.length;x++){
        if(arr[x]%2 != 0){
            console.log(arr[x])
        }
    }
}

oddNumbers(arr)