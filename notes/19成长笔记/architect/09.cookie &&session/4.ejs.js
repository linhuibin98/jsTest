const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

let data = {to: '你好', name: '林hb'};
let tempStr = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

function render(str, data) {
  return str.replace(/<%=([\s\S]*?)%>/g, function() {
    console.log(arguments);
    return data[arguments[1].trim()];
  })
}

console.log(render(tempStr, data));

//console.log(ejs.render(tempStr, data));
