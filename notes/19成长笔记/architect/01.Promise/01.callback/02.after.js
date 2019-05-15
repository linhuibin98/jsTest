
//after 函数执行多次后, 再执行功能(闭包)
//after作用:  利用after , 实现所有异步操作 都执行完之后再返回结果

function after(times, callback) {
  return function () {  //Promise.all 
    if (--times === 0) {
      callback();
    }
  }
}

let newFn = after(3, function () {  //高级函数 aop
  console.log('after');
})

newFn();
newFn();
newFn();