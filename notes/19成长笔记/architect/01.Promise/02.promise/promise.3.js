function Promise(executor) {
  //在promise 内部定义一个转态  当前promise 的状态
  let self = this;
  self.status = 'pending'; //默认状态是 pending
  self.value = undefined;
  self.reason = undefined;
  self.onResolvedCallbacks = []; // 存放所有成功的回调
  self.onRejectedCallbacks = []; // 存放所有失败的回调


  function resolve(value) {
    if (self.status === 'pending') { //只有处于pending状态时, 才能改变状态
      self.value = value;
      self.status = 'resolved'; //成功态
      self.onResolvedCallbacks.forEach(fn => {
        fn();
      })
    }
  }

  function reject(reason) {
    if (self.status === 'pending') {
      self.reason = reason;
      self.status = 'rejected'; //失败态
      self.onRejectedCallbacks.forEach(fn => {
        fn();
      })
    }
  }

  executor(resolve, reject); //立即执行...
}

//判断 x 是否为promise
function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {    // 防止自己等待自己
    return reject(new TypeError('循环引用了...'));
  }
  //保证当前x 是一个引用类型
  if (x !== null && typeof x === 'object' || typeof x === 'function') {
    //x 很有可能是一个promise
    try {
      let then = x.then; // then 属性具有getter 此时获取会发生异常
      if (then === 'function') {
        then.call(x, (y) => {
          resolve(y);
        }, (r) => {
          reject(r);
        })
      } else { // then 为普通对象
        resolve(x); // 例{a: 1}
      }
    } catch (e) {
      reject(e);
    }
  } else {
    resolve(x); // x为普通值, 直接成功.
  }
}

Promise.prototype.then = function (onFulfilled, onRjetect) {
  let self = this;
  //调用then 之后 需要返回一个新的promise
  let promise2 = new Promise(function (resolve, reject) {
    if (self.status === 'resolved') {
      setTimeout(() => {
        try {
          let x = onFulfilled(self.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e); // 如果执行函数时抛出失败
        }
      }, 0)
    }
    if (self.status === 'rejected') {
      setTimeout(() => {
        try {
          let x = onRjetect(self.reason);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      }, 0)
    }
    if (self.status === 'pending') {
      self.onResolvedCallbacks.push(function () {
        setTimeout(() => {
          try {
            let x = onFulfilled(self.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0)
      });
      self.onRejectedCallbacks.push(function () {
        setTimeout(() => {
          try {
            let x = onRjetect(self.reason)
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        })
      });
    }
  })
  return promise2;
}

module.exports = Promise;