let arr1 = [{
    name: 'lin',
    age: 18
},{
    name: 'bin',
    age: 20
},{
    name: 'hui',
    age: 19
}]
let a = arr1.find(function (val,index) {
    return val.name !== 'lin'
})
console.log(a)

let arr2 = [1,3,6,9,10,14,16,19,20]
let b = arr2.find(function (val) {
    return val > 10
})
console.log(b)