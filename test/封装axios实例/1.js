
const axios = require('./axios');

axios.request({
  url: '/get',
  method: 'get'
}).then((res) => {
  console.log(res);
}, (err) => {
  console.log(err);
})