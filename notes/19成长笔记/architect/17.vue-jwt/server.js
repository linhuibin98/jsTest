const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
  res.header("Access-control-Allow-Origin", "http://127.0.0.1:8080");
  res.header("Access-control-Allow-Methods", "GET, OPTIONS, HEAD, POST, PUT");
  res.header("Access-control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === 'OPTIONS') res.send('ok');
  next();
})


app.use(bodyParser.json());

app.get('/user', (req, res) => {
  res.json({name: 'linhuibin'});
})

app.listen(3000, () => {
  console.log('server is running at port 3000');
})