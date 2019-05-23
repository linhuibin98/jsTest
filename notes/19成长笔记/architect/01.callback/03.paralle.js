const fs = require('fs');
const path = require('path');

//利用after , 实现所有异步操作 都执行完之后再返回结果

let after = function (times, callback) {
  let result = '';
  return function (data) {
    result += data;
    if (--times === 0) {
      callback(result);
    }
  }
}

let fn = after(2, function (result) {
  console.log(result);
});
fs.readFile(path.join(__dirname, 'name.txt'), 'utf8', function (err, data) {
  if (err) throw err;
  fn(data);
});

fs.readFile(path.join(__dirname, 'age.txt'), 'utf8', function (err, data) {
  if (err) throw err;
  fn(data);
})