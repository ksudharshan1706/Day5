arr = [1,1,1,1,2,2,2,4,5,5,12,13,14,14,16,3,2,77]

var removedups = () => {
    obj1 = {}
    for(var x = 0; x < arr.length; x++){
        if(obj1[arr[x]]){
            obj1[arr[x]] += 1
        }
        else{
            obj1[arr[x]] = 1
        }
    }
    for(var ele in obj1){
        if(obj1[ele] > 1){
            delete obj1[ele]
        }
    }
    result = Object.keys(obj1)
    return result
}

console.log(removedups(arr))
