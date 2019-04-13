/*
  语法： fun.call(thisArg, arg1, arg2, ...)
  参数：
      thisArg
      在fun函数运行时指定的this值。需要注意的是，指定的this值并不一定是该函数执行时真正的this值，如果这个函数处于non-strict mode，则指定为null和undefined的this值会自动指向全局对象(浏览器中就是window对象)，同时值为原始值(数字，字符串，布尔值)的this会指向该原始值的自动包装对象。
      arg1, arg2, ...
      指定的参数列表。

例：
let foo = {
  value:1
}

function bar() {
  console.log(this.value);
}

bar.call(foo);  // 1
*/
/*
  分析上面代码： 1. call改变了this的指向， 指向了foo
                2. bar 函数执行了。
  模拟第一步：试想当调用call()的时候，对象foo改成
    let foo = {
      value: 1,
      bar: function () {
        console.log(this.value);
      }
    }
    foo.bar();
    这个时候this就指向了 foo,但是这样就给foo本身添加了一个属性，我们再用 
    delete foo.bar;
    总结： 1. 将函数设为对象的属性
            foo.fn = bar;
          2. 执行该函数
            foo.fn();
          3. 删除该函数
            delete foo.fn;
*/

//第一版

/*
Function.prototype.myCall1 = function (obj) {
  //首先获取调用call方法的对象， 即this
  obj.fn = this;
  obj.fn();
  delete obj.fn;
}

//测试
let foo = {
  value: 10
}

function bar() {
  console.log(this.value);
}

bar.myCall1(foo);
*/

//第一步就实现了

/*
  模拟实现第二步：call函数传递参数的实现
    例
    let foo = {
      value: 100
    }

    function bar(name, age) {
      console.log(name);
      console.log(age);
      console.log(this.value);
    }

    bar.call(foo, 'davel', 18);
    //'davel'
    //18
    //100

    注意： 传入参数个数不确定...
    利用 arguments, 取出第二个 到 最后一个参数， 放到一个数组中保存

    例：
    arguments = {
      0: foo,
      1: 'devel',
      2: 18,
      length: 3
    }
    //因为arguments是 类数组对象,具有length属性
    let args = [];
    for (let i = 1; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    //不定长的参数问题解决了， 接着我们要把保存的参数， 放到要执行的函数中去
    1.foo.fn(...args) //扩展运算符是ES6中的方法，而call是es3的方法，不推荐使用
    2. 
*/

//版本二

/*
Function.prototype.myCall2 = function (obj) {
  //首先获取调用call方法的对象， 即this
  obj.fn = this;
  let args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  obj.fn(...args);
  delete obj.fn;
}

//测试
let foo = {
  value: 10
}

function bar(name, age) {
  console.log(name);
  console.log(age);
  console.log(this.value);
}

bar.myCall2(foo, '你好。。', 20);
*/
//版本二也完成了

//模拟第三步

/*
  let foo = {
  value: 66
}

function bar(name, age) {
  console.log(this);    //window
}

bar.call(null); //实际call可以赋予 null / undefined, 此时 this 指向 window
//所以我们要解决上面问题
 */

 //版本三

 /*
 Function.prototype.myCall3 = function (obj) {
   //判断obj传入值 是否为 null 或者 undefined
   obj = obj || window;
  //首先获取调用call方法的对象， 即this
  obj.fn = this;
  let args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  let result = obj.fn(...args);
  delete obj.fn;
  return result;
}

//测试
let foo = {
  value: 10
}

var value = 99;
function bar() {
  console.log(this);
}

bar.myCall3(null);

*/
// 注意： 全局中 let 声明的变量（方法）,不会挂载到 window 的属性 （方法）中
//结束。。。

