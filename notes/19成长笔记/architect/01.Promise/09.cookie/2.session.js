const http = require('http');
const url = require('url');
const querystring = require('querystring');
const uuid = require('uuid');

let sessionId = 'zhufengwash';
  let session = {  //存放数据
 
  };
http.createServer((req, res) =>{
  const {pathname, query} = url.parse(req.url);


  
  if (pathname === '/wash') {
    let cookies = querystring.parse(req.headers.cookie, '; ') || {};
    let username = cookies[sessionId];
    if (username && session[username]) {
      console.log(1)
      session[username].money -= 10;
      res.setHeader('Content-Type', 'text/html; charset=utf8');
      res.end(`当前你的额度是${session[username].money}`);

    } else { //第一次访问
      console.log(2)
      let cardId = uuid.v4();
      res.setHeader('Content-Type', 'text/html; charset=utf8');
      res.setHeader('Set-Cookie', `${sessionId}=${cardId}; httpOnly=true`);
      session[cardId] = {
        money: 100
      };
      res.end(`当前你的额度是${session[cardId].money}`);
    }
  }
  
})
  .listen(3000, () => {
    console.log('server is running at port 3000');
  })
