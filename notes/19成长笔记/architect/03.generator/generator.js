const fs = require('fs');
const path = require('path');

/*
情景： 依次读取：文件1.txt, 2.txt, 3.txt 的内容
读取文件通常采用异步，必须等待 1.txt读取完成再读取下一个文件
*/

// 太复杂，恶魔金字塔
// 难以维护，一个出错，整个停止执行

/*
fs.readFile(path.resolve(__dirname, '1.txt'), 'utf8', (err, data) => {
  if (!err) {
    console.log(data);
    fs.readFile(path.resolve(__dirname, '2.txt'), 'utf8', (err, data) => {
      if (!err) {
        console.log(data);
        fs.readFile(path.resolve(__dirname, '3.txt'), 'utf8', (err, data) => {
          if (!err) {
            console.log(data);
          } else {
            console.log(err);
          }
        })
      } else {
        console.log(err);
      }
    })
  } else {
    console.log(err);
  }
})
*/

// 利用回调

/*
function readFile(url, cb) {
  fs.readFile(path.resolve(__dirname, url), 'utf8', (err, data) => {
    if (!err) {
      cb(data);
    } else {
      console.log(err);
    }
  })
}

function read(data) {
  console.log(data);
}

readFile('1.txt', read);
readFile('2.txt', read);
readFile('3.txt', read);
*/

// 利用 generator
function readFile(url) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(__dirname, url), 'utf8', (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    })
  })
}


function *read() {
  console.log('开始')
  let data = yield readFile('1.txt');
  console.log(data);
  let d = yield 'b';
  console.log(d);
}

let a = read();
console.log(a.next());
console.log(a.next());