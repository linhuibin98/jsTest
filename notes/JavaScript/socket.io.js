const socket = require('socket.io');
const http = require('http');
const fs = require('fs');
const path = require('path');

function handler(req, res) {
  fs.readFile(path.join(__dirname, './socket.io.html'), (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200);
    res.end(data);
  })
}

const app = http.createServer(handler);

app.listen(3000, () => {
  console.log('server is runing at port 3000');
})

const io = socket(app);

io.on('connection', socket => {
  socket.on('client', data => {
    console.log(data);
  })
})

