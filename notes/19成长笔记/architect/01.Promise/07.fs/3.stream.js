const fs = require('fs');
const path = require('path');

let ts = fs.createReadStream(path.join(__dirname, 'name.txt'));

let arr = [];

ts.on('data', function (chunk) {
  arr.push(chunk);
})

ts.on('end', function () {
  let data = Buffer.concat(arr).toString();
  console.log(data, '结束了...');
})