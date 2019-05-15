let fs = require('fs');
const path = require('path');

//发布订阅
// e.on([function]) 将函数添加到_arr数组中, e.emit() 遍历_arr 并且执行函数

function EventEmitter () {
  this._arr = [];
}

EventEmitter.prototype.on = function (callback) {
  this._arr.push(callback)
}

EventEmitter.prototype.emit = function () {
  this._arr.forEach(fn => fn.apply(this, arguments));
}

let e = new EventEmitter();

let school = {};

e.on(function (data, key) {
  school[key] = data;
  if (Object.keys(school).length === 2) {
    console.log(school);
  }
});

fs.readFile(path.join(__dirname, 'name.txt'), 'utf8', function (err, data) {
  if (err) throw err;
  e.emit(data, 'name');
});

fs.readFile(path.join(__dirname, 'age.txt'), 'utf8', function (err, data) {
  if (err) throw err;
  e.emit(data, 'age')
})
