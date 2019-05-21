const http = require('http');
const url = require('url');
const querystring = require('querystring');

// 浏览器端 ： document.cookie = 'a=2' 设置cookie

// node服务设置cookie, 设置响应头res.setHeader('Set-Cookie', ['name=lll', 'age=18']); 多个cookie用数组的方式传递
// 注意： 不能多个响应头设置cookie，否则后面的会覆盖前面的，只会显示后面的
/**
 * 例如：
 * 
 * res.setHeader('Set-Cookie', 'name=lll');
 * res.setHeader('Set-Cookie', 'age=19');
 * 
 * 前台浏览器只能看到age=19
 */

 // cookie 的参数
 /**
  * 设置方式
  * res.setHeader('Set-Cookie', 'name=lll; domain=localhost')   传参在设置的cookie用; 隔开，设置
  * 
  * - name=value：键值对，可以设置要保存的 Key/Value，注意这里的 name 不能和其他属性项的名字一样
  * - domain  针对某个域名，只在传入的域名下设置该cookie , 例： domain=.jd.com, 则可以在 a.jd.com; b.jd.com ; c.js.com ....下共享cookie
  * - path   针对路径，只在传入的路径下显示该cookie , 例： path=/write
  * - expires  设置cookie过期时间（绝对时间）,expires=GMT_String"; 其中GMT_String是以GMT格式表示的时间字符串，超过这个时间，Cookie将消失，不可访问。例如：如果要将Cookie设置为10天后过期，可以这样实现：
  * 
  * ```js
  * 
  * //获取当前时间
  *  var date=new Date();
  *  var expireDays=10;
  *  //将date设置为10天以后的时间
  *  date.setTime(date.getTime()+expireDays*24*3600*1000);
  *  //将userId和userName两个Cookie设置为10天后过期
  * res.setHeader('Set-Cookie', 'name=lll; expires='+date.toGMTString())
  * 
  * ```
  * - max-age  替代expires, 设置过期时间(相对时间), 单位为秒(s), 例： max-age=10; cookie在10s后消失此Cookie会存储到客户端电脑，以Cookie文件形式保存，不论关闭浏览器或关闭电脑，直到时间到才会过期。 可以为负数，表示此Cookie只是存储在浏览器内存里，只要关闭浏览器，此Cookie就会消失。maxAge默认值为-1。 还可以为0，表示从客户端电脑或浏览器内存中删除此Cookie
  * 
  * - secure    当设置为true时，表示创建的 Cookie 会被以安全的形式向服务器传输，也就是只能在 HTTPS 连接中被浏览器传递到服务器端进行会话验证，如果是 HTTP 连接则不会传递该信息，所以不会被窃取到Cookie 的具体内容。同上，在客户端我们也无法在document.Cookie找到被设置了Secure=true的Cookie键值对
  * - httpOnly  这是微软对Cookie做的扩展。如果在Cookie中设置了"HttpOnly"属性，那么通过程序(JS脚本、Applet等)将无法读取到Cookie信息，这样能有效的防止XSS攻击
  * 
  */

http.createServer((req, res) => {
  const {pathname, query} = url.parse(req.url, true);
  const {method} = req;

// 使用res.setHeader('Set-Cookie') 设置cookie时, 太复杂, 自己实现一个设置cookie的方法
/**
 * 
 * @param {键} key 
 * @param {值} value 
 * @param {参数} options 
 */

 let arr = [];
res.setCookie = function(key, value, options={}) {
  let optionsArr = [];

  if (options.maxAge) {
    optionsArr.push(`Max-Age=${options.maxAge}`);
  }

  if (options.path) {
    optionsArr.push(`path=${options.path}`);
  }

  if (options.domain) {
    optionsArr.push(`domain=${options.domain}`);
  }

  arr.push(`${key}=${value}; ` + optionsArr.join('; '));
}

//获取cookie
res.getCookie = function(key) {
  let cookies = querystring.parse(req.headers.cookie, '; ') || {};
  return cookies[key] || '不存在';
}

  if (pathname === '/write') {
    // 设置cookie, res.setHeader
    // res.setHeader('Set-Cookie', 'name=999');
    res.setCookie('name', 'lll', {maxAge: 1000})
    res.setHeader('Set-Cookie', arr[0]);
    res.end('ok');
  }
  if (pathname === '/read') {
    //读取cookie, req.headers.cookie
    // let cookies = querystring.parse(req.headers.cookie, '; ') || {};
    let cookie = res.getCookie('name');
    res.end(JSON.stringify(cookie));
  }
})
  .listen(3000, () => {
    console.log('server is running port 3000');
  })
