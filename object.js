let id = Symbol('id')
let obj = {
    name:"suman",
    roll:52,
    status:true,
    [id]:101
}
obj.name = "mou"
console.log(obj[id]);//this is the way to use symbol
