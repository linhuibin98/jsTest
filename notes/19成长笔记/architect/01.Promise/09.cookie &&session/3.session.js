const http = require('http');
const querystring = require('querystring');
const url = require('url');
const uuid = require('uuid');

let signName = 'lhbWash';

// 存放用户信息 和 映射表
let session = {   // 存在服务端内存中 , 存在数据库中 redis  /  mongodb

};

http.createServer((req, res) => {
  let { pathname } = url.parse(req.url);

  if (pathname === '/wash') {
    let cookies = querystring.parse(req.headers.cookie, '; ') || {};
    // 判断是否第一次访问 
    let userId = cookies[signName]; // 不存在则为undefined
    
    if (userId && session[userId]) {  // 判断用户名 并且 是否在session中存在信息
      session[userId]['money'] -= 10;
      res.setHeader('Content-Type', 'text/html; charset=utf8');
      res.end(`你的余额是${session[userId]['money']}元`);
    } else {
      // 第一次访问
      let cardId = uuid.v4();
      res.setHeader('Set-Cookie', `${signName}=${cardId}`);
      session[cardId] = {
        money: 100
      }
      res.setHeader('Content-Type', 'text/html; charset=utf8');
      res.end(`你的余额是${session[cardId]['money']}元`);
    }
  }
})
  .listen(3000, () => {
    console.log('server is runing at port 3000');
  })