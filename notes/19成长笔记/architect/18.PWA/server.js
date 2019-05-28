
/*
const fs = require('fs');

let arr = [];

for (let i = 1; i < 80; i++) {
  arr.push(`https://www.fullstackjavascript.cn/conan/${i}.jpeg`);
}

fs.writeFileSync('data.json', JSON.stringify(arr));
*/

const express = require('express');

const app = express();

let json = require('./data.json');

app.use(express.static(__dirname));  // 使用当前目录启动服务

app.get('/api/img', (req, res) => {
  let start = Math.round(Math.random() * (json.length - 20))
  res.json(json.slice(start, start + 20));
})

app.listen(3000);