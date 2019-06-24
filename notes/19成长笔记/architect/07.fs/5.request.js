const http = require('http');
const querystring = require('querystring');

const postData = querystring.stringify({
  'msg': '你好世界'
});

const options = {
  hostname: '127.0.0.1',
  port: 3000,
  path: '/input',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData),
    'Content-Encoding': 'utf8' 
  }
}

const req = http.request(options, res => {
  res.setEncoding('utf8');
  res.on('data', thunk => {
    console.log(thunk);
  })
});

req.write(postData);
req.end();