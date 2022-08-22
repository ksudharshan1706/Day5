str = "sudharshan is learning javaScript"
// function titleCaps(str){
//     console.log("Anonymous Function")
//     str1 = ""
//     list1 = str.split(" ")
//     for(let x = 0;x<list1.length;x++){
//         if (x != list1.length-1){
//             str1 += list1[x][0].toUpperCase() + list1[x].slice(1) + ' ' 
//         }
//         else{
//             str1 += list1[x][0].toUpperCase() + list1[x].slice(1)
//         }
//     }
//     return str1
// }

let titleCaps = () => {
    console.log("Arrow Function")
    str1 = ""
    list1 = str.split(" ")
    for(let x in list1){
        if(x!=list1.length){
            str1 += list1[x][0].toUpperCase() + list1[x].slice(1) + ' '
        }
        else{
            str1 += list1[x][0].toUpperCase() + list1[x].slice(1)
        }
    }
    return str1
}

let titlecap_string = titleCaps(str)
console.log(titlecap_string)