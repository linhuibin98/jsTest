// 同步任务, 微任务, 宏任务的执行顺序

async function async1() {
  console.log('async1 start');
  await async2();
}

async function async2() {
  console.log('async2');
}

console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
})

async1();

new Promise(function(resolve) {
  console.log('promise1');
  resolve();
}).then(function() {
  console.log('promise2');
})
console.log('script end');

/*
script start
async start
async2
promise1
script end
promise2
setTimeout


*/