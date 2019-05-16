## node runtime
- 让javascript代码运行在服务端，node基于v8，并不包含javascript的全局
- DOM BOM EcmaScript
- node中基本包含EcmaScript 读写文件
- 提供简单高性能服务器（cpu密集计算i/o密集文件读取）
- 分配单位靠的是进程进程中一个环境环境中可以开很多线程（主线程是单线程 node api异步的）底层还是通过多线程来模拟了异步libuv
- java多线程（切换执行上下文切换的很快）并发操作同一个文件锁的概念
- 多进程增强稳定性可靠

## node
- 异步/同步
- 阻塞和非阻塞

##node安装
- nvm 来切换版本 npm install nvm-g nvm use version（mac）
- nvm-win 可以切换版本
>npm node pacakge manager（安装包的）
>nvm version 管理版本的
>nrm registery源

## node 事件环
- 微任务的概念 (promise.then < process.nextTick)
- 主执行栈
- timers 时间   setTimeout() 的回调
- poll 轮训 i/o 回调 fs.readFile()  等待时间到达
- check setTimeout 方法
> 默认会从上到下依次执行如果代码执行到po11发现check阶段没有那就在poL1中等待时间到达后在清空代码

切换队列把队列清空如果执行了很多个回调超过了最大限制也会切换队列
poll 阶段下一个阶段是check 如果check队列中用东西会先执行check

node 11有更新目测（宏任务执行一个就会执行微任务（更像浏览器））新版中每个宏务执行后就会清空微任务
