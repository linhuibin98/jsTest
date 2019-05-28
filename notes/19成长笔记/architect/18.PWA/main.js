let list = document.querySelector('.list');

let xhr = new XMLHttpRequest();
let str = ``;

xhr.open('get', 'http://127.0.0.1:3000/api/img', true); // true 表示异步

xhr.responseType = 'json';

xhr.onload = function() {
  let arr = xhr.response;
  arr.forEach(item => {
    str += `<li><img src=${item} /></li>`;
  });
  list.innerHTML = str;
}

xhr.send();