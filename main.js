const map = {
    0:'Zero',
    1:'One',
    2:'Two',
    3:'Three',
    4:'Four',
    5:'Five',
    6:'Six',
    7:'Seven',
    8:'Eight',
    9:'Nine'
}
let ans =''
let argvArray = process.argv.slice(2)
for(let element of argvArray){
    let elementToString = ''
    for(let character of Array.from(element)){
        elementToString += map[character]
    }
    ans += elementToString  + ', '
}
console.log(ans.slice(0,-2))
