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