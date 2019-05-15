//promise 是一个类(解决异步问题的)
//自己来实现这个流程
// new promise时, 需要传递一个 executor 执行器(函数) 会被立即调用
//promise 承诺  默认状态是 等待态(pending)  调用resolve 表示成功   调用reject表示失败
let fs = require('fs');
let path = require('path');
let Promise = require('./promise.3');

//readFile 实现Promise
function readFile(url) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path.join(__dirname, url), 'utf8', function (err, data) {
      if (err) reject(err);
      resolve(data);
    })
  })
}

/*链式调用的特点 
1. 如果一个then方法 返回一个普通值 这个值会传递给下一次then中作为成功的结果
2. 返回不是普通值 (promise 或者 报错)
3. 如果返回的是一个promise 会根据返回的promise 是成功还是失败 决定下一个then是成功还是失败
4. catch捕获错误机制 (1. 默认会找离自己最近then的失败) 找不到就向下找
5. jquery 链式调用 返回this  promise调用then后 会返回一个新的promise
*/
let p = new Promise(function (resolve, reject) {
  reject('情人节到了...')
})
console.log('end');

let promise2 = p.then(data => {
  console.log(data);
  return 1000;
}, err => {
  console.log(err,'123');
  return 1000;
})
promise2.then(data => {
  console.log(data);
}, err => {
  console.log('err', err);
})