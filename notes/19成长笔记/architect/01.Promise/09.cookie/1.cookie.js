const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  const {pathname, query} = url.parse(req.url, true);
  const {method} = req;

  if (pathname === '/write') {
    res.setHeader('Set-Cookie', 'name=999;max-age=10');
    res.end();
  }
  if (pathname === '/read') {
    res.end();
  }
})
  .listen(3000, () => {
    console.log('server is running port 3000');
  })