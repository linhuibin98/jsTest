//版本1, promise中不支持异步逻辑

function Promise(executor) {
  //在promise 内部定义一个转态  当前promise 的状态
  let self = this;
  self.status = 'pending'; //默认状态是 pending
  self.value = undefined;
  self.reason = undefined;


  function resolve(value) {
    if (self.status === 'pending') { //只有处于pending状态时, 才能改变状态
      self.value = value;
      self.status = 'resolved'; //成功态
    }
  }

  function reject(reason) {
    if (self.status === 'pending') {
      self.reason = reason;
      self.status = 'rejected'; //失败态
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
}

module.exports = Promise;