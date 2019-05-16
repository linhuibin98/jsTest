// 全局属性 global
// global外面还有一些属性
// exports module require __dirname  __filename

// node 实现模块化 (命名冲突  代码方便维护  方便协作)
//浏览器中实现模块化 var obj = {a} 不能完全解决命名冲突的  调用过长  比如：单例
// 自执行函数来实现  seajs  cmd  requirejs  amd(异步)
//commonjs规范通过文件读取（utf8）实现了模块化
      //1）文件即模块
      //2）定义了导出方式 module.exports exports
      //3）定义了导入方式 require

// 让字符串执行？  eval  /  new Function  在浏览器中

/*
let hello =' zf';
eval('console.1og(hel1o)'); //eval执行有依赖关系
//new Function PASS
var b =3;
let str = 'let a=1; return a+b';
let newFn =new Function('b', str);
console.log(newFn.tostring());
*/

//内置模块  模块  内置/核心  文件模块/自定义模块  第三方模块
// node中执行字符串 , 可以使用 vm 内置模块
let vm = require('vm');  // 提供一个沙箱, 运行环境。不影响外部

/*
vm.runInContext   
vm.runInNewContext
vm.runInThisContext
*/