let fn = {
    num: 20,
    a: (function () {
        let num = 10
        return function () {
            console.log(this.num)
        }
    })(),
}

let an = fn.a
console.log(an.call(an))
