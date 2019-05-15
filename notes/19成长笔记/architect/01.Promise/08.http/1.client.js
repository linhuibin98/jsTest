let http = require('http');
let querystring = require('querystring');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
};

let req = http.request(options, function (response) {
  response.setEncoding('utf8');
  response.on('data', (chunk) => {  //响应主体。。。


  });
  response.on('end', () => {
    console.log('响应完成。。。');
  });

  response.on('err', (err) =>{
    console.error(`请求错误：${err.message}`);
  })
});

//数据
let postData = querystring.stringify({
  msg: '你好，世界'
})

//将数据写入请求主体中
req.end('name=zf&a=1');


