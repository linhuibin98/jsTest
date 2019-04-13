var a = 10
var obj1 = {
    a: 20,
    fn: (function () {
        this.a *= 2
        a = 5
        var a = 6
        return function () {
            this.a *= a
            console.log(a)
        }
    })()
}

var obj2 = {
    a: 30
}

var fn = obj1.fn
fn()

obj1.fn()
obj1.fn.call(obj2);
Math.asin(10>>4/3)