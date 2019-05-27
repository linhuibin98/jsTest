const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();

let secret = 'lhb';

app.use((req, res, next) => {
  res.header("Access-control-Allow-Origin", "http://127.0.0.1:8080");
  res.header("Access-control-Allow-Methods", "GET, OPTIONS, HEAD, POST, PUT");
  res.header("Access-control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === 'OPTIONS') res.end();
  next();
})


app.use(bodyParser.json());

app.get('/user', (req, res) => {
  res.json({name: 'linhuibin'});
});

// cookie  token (json web token)
app.post('/login', (req, res) => {
  let { username } = req.body;
  if (username === 'admin') {
    return res.json({
      code: 0,
      username: 'admin',
      token: jwt.sign({username: 'admin'}, secret, {
        expiresIn: 3600
      })
    })
  } else {
    return res.json({
      code: 1,
      msg: '用户名不存在'
    })
  }
});

app.get('/validate', (req, res) => {
  if (req.headers.authorization) {
    let token = req.headers.authorization
    jwt.verify(token, secret, (err, decode) => {
      if (err) {
        res.json({
          code: 1,
          data: 'token失效了'
        })
      } else {
        res.json({
          code: 0,
          username: decode.username,
          token: jwt.sign({username: decode.username}, secret, {
            expiresIn: 3600
        })
        })
      }
    })
  }
})

app.listen(3000, () => {
  console.log('server is running at port 3000');
})