arr = [1,2,3,4,5,6,7,8,9,232,213,24,761,563]
// function primeNumber(arr){
//    console.log("Anonymous Function")
//     for(var key of arr){
//         count = 0
//         for(var x = 2;x<=key/2;x++){
//             if(key%x == 0){
//                 count += 1
//             }
//         }
//         if(count == 0){
//             console.log(key)
//         }
//     }
// }

let primeNumber = (arr) => {
    console.log("Arrow Function")
    for(var key of arr){
        count = 0
        for(var x = 2;x<=key/2;x++){
            if(key%x == 0){
                count += 1
            }
        }
        if(count == 0){
            console.log(key)
        }
    }
}

primeNumber(arr)