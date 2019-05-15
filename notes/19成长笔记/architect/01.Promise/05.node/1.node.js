//global 可以直接访问global并且没有window的概急
//window 代理了global

 // console.log(global);

/**
 * process 进程  (当前运行的环境)
 *    process.cwd();  当前工作目录
 *    process.env   node工作环境
 *        process.env.NODE_ENV 
 *    process.argv   // 获取程序运行时的参数
 *    process.nextTick(callback); 下一队列，微任务
 * 
 * Buffer  读取的内容  都是二进制 buffer主要是内存 缓存 16进制 可以和字符串相互转化
 * 
 * clearImmediate   setImmediate  宏任务
 * clearInterval    setInterval  定时器 宏任务
 * clearTimeout
 * console
 * 
 * eval  decode   encode
 * 
 * 
 */

 console.log()