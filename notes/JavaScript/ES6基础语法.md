## 命令let、const
- ### let 命令
     + let命令作用域只局限于当前代码块
     ```javascript
     {
         let a = 10;
         var b = 1;
     }
     console.log(a) //ReferenceError: a is not defind.
     console.log(b) // 1
     // 在Es6中，一对{}表示一个代码块，let声明的变量只在所在的代码块中有效。
     ```
     + 使用let声明的变量作用域不会被提前
     ```javascript
     //var的情况
     console.log(foo); //输出 undefined
     var foo = 2；
     
     //let 的情况
     console.log(bar); // 报错Reference: bar is not defined
     let bar = 2;
     
     //示例中 变量foo用var命令声明，会发生变量提升，即脚本开始运行时，foo已经存在了，但是没值，所以输出undefined。
     //变量bar用let命令声明，不会发生变量提升，表示在声明bar之前，变量bar是不存在的，所以会抛出一个错误。
     ```
     + 在相同作用域下不能声明相同的变量
     ```javascript
     //let 命令不允许在相同作用域内1重复声明同一个变量
     
     //var中
     var a = 1;
     var a = 10;
     console.log(a); // 10
     //var中后面声明名的会覆盖前面，不会报错，显然这是不好的
     
     //let中
     let b = 1;
     let b = 2;  //报错，b is already defined.
     
     
     ```
- ### const命令
    + const命令声明一个常量。一旦声明，常量的值就不能变
    ```javascript
    const PI = 3.1415;
    console.log(PI); //3.1415
    PI = 3; //TypeError: Assignment to constant variable  改变就会报错
    const foo; //SyntaxError: Missing in const declaration
    //const一旦声明，就必须立即初始化赋值，不能留到以后赋值。否则会报错。
    ```
    + 不存在变量提升
    + 不可重复声明
    + const实际上是保证内存地址不变
    ```javascript
    //简单数据类型（数值、字符串、布尔值），值就保存在指向的内存地址，因此等同于常量。
    //复合类型的数据（主要是对象和数组），常量指向的内存地址保存的只是一个指针，const只能保证这个指针是固定的，至于数据结构，就不受控制了。
    const foo = {};
    //为foo 添加一个属性
    foo.prop = 123;
    console.log(foo.prop); //123   不会报错，正常输出
    //将foo指向另一个对象，就会报错
    foo = {}; //TypeError: “foo” is read-only
    ```
- 小结
    再次强调一下let、const命令使用场景：const一般需要一个模块的时候用或者定义一些全局常量时用。而let限制了变量的作用域，保证变量不会去 影响全局变量，所以尽量将var改为用let。

## 变量的解构赋值
- 1. 数组的解构
```javascript
//传统赋值
let b = 2;
let  = 3;
//在ES6语法中允许这样
let [a,b,c] = [1,2,3];
//以上表示可以从数组中提取值，按照对应位置对变量赋值。本质上，这种写法属于“匹配模式“，只要等号两边的模式相同，左边的变量就会被赋予对应的值。

let [x,y] = [‘a’];
console.log(x); // ‘a’
console.log(y); // undefined
若解构不成功，将会赋值为undefined。

let [a,[b],c] = [1,[2,3],4];
console.log(a); // 1
console.log(b); // 2
console.log(c); //4

//解构赋值也允许指定默认值。
let [foo = true] = [];
console.log(foo); //true

let [x = 1] = [null];
console.log(x); // true
```
- 注意ES6内部使用严格相等运算符（===）来判断一个位置是否有值，所以只有当一个数组成员严格等于undefined，默认值才会生效。

- 对象的解构赋值
```javascript
let {bar,foo} = {foo:”aaa”, bar:”bbb”};
console.log(foo); //”aaa”
cosnole.log(bar); //”bbb”

//解构后取别名
let obj = {first: ‘hello’, last: ‘world’};
let {first: f, last: l} = obj;
console.log(f); // ‘hello’
console.log(l); // ‘world’

//通过上个实例说明，实际上通常解构赋值为简写形式
let {foo: foo, bar: bar} = {foo: ‘aaa’, bar: ‘bbb’};
//等同于
let {foo, bar} = {foo: ‘aaa’, bar: ‘bbb’};
```
- 经验（取别名时）：对象的解构赋值的内部机制，是先找到同名属性，再赋给对应的变量。真正被赋值的是后者，而不是前者。