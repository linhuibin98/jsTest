const http = require('http');
const url = require('url');
http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);
  const method = req.method;

  if (pathname === '/get') {
    switch(method) {
      case 'GET':
        res.end(JSON.stringify({
          code: 0,
          data: '成功...'
        }));
        break;
    }
  }
})
  .listen(3000, () => {
    console.log('server is running at port 3000');
  })