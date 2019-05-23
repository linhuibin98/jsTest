//高级函数

//自定一个函数, 在函数执行之前调用   利用闭包...

Function.prototype.before = function (callback) {
  let self = this;
  return function () { 
    callback();
    self.call(self, ...arguments);
   }
}

function fn() {
  console.log('功能..', ...arguments);
}

let newFn = fn.before(function () {
  console.log('函数执行之前...');
})

newFn('你好...');