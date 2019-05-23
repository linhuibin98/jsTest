//promise 是一个类(解决异步问题的)
//自己来实现这个流程
// new promise时, 需要传递一个 executor 执行器(函数) 会被立即调用
//promise 承诺  默认状态是 等待态(pending)  调用resolve 表示成功   调用reject表示失败

let Promise = require('../02/promise.2');

let p = new Promise(function (resolve, reject) {
  console.log('start'); 
    reject('放假了...');
});

p.then((value) => {
  console.log('成功了', value);
}, (reason) => {
  console.log('失败了', reason);
})

console.log('end');