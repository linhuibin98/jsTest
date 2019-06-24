const fs = require('fs');
const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  let { pathname, query } = url.parse(req.url, true);
  let dataArr = [];

  console.log(req.method);
  req.on('data', thunk => {
    console.log('data',thunk);
    dataArr.push(thunk);
  })
  req.on('end', () => {
    let data = Buffer.concat(dataArr);
    console.log(data.toString('utf8'));
  })
  res.setHeader('Content-Encoding', 'utf8');
  res.end('complete')
}) 
  .listen(3000, () => {
    console.log('server is runing at port 3000');
  })