process.nextTick(function () {
  console.log('nextTick');
})

setTimeout(function () {
  console.log('timeout');
})