//方法一(推荐)

Array.prototype.myUnique = function () {
    //复制原数组
    let _this = [...this];
    let obj = {};
    for (let i = 0; i < _this.length; i++) {
        let item = _this[i];

        if (typeof obj[item] !== 'undefined') {
            //已经存在,删除该项
            // _this.splice[i,1]; //后面移位,消耗性能,不推荐使用
            _this[i] = _this[_this.length - 1];
            _this.length--;
            i--;
            continue;
        }

        obj[item] = true;   
    }
    return _this;
};

let arr = [1,1,2,3,4,3,2,5,5];
let arrUnique = arr.myUnique();
console.log(arrUnique); // [1,2,3,4,5]




