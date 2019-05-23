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

Promise.prototype.then = function (onFulfilled, onRjetect) {
  let self = this;
  if (self.status === 'resolved') {
    onFulfilled(self.value);
  }
  if (self.status === 'rejected') {
    onRjetect(self.reason);
  }
  if (self.status === 'pending') {
    this.onResolvedCallbacks.push(function () {
      onFulfilled(self.value);
    });
    this.onRejectedCallbacks.push(function () {
      onRjetect(self.reason);
    });
  }
}

module.exports = Promise;