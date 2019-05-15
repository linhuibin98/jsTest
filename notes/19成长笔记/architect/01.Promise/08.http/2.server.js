const http = require('http');
const url = require('url');
const querystring = require('querystring');

let server = http.createServer(function (request, response) {
  let arr = [];
  request.on('data', (chunk) => {
    arr.push(chunk);
  });
  request.on('end', () => {
    let str = Buffer.concat(arr).toString();
    console.log(url.parse(str, true).query)
    console.log(querystring.parse(str));
  })
});

server.listen(3000, function () {
  console.log('localhost:3000启动成功');
})

