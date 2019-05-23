setTimeout(() => {
  console.log('timeout 1');

  process.nextTick(() => {
    console.log('nextTick 2');
  })
})

console.log('start');

process.nextTick(() => {
  console.log('nextTick 1');

  setTimeout(() => {
    console.log('timeout 2');
  })
})

// start  nextTick 1  timeout1  nextTick2  timeout2

//node 10
//start nextTickl timeout1 timeout2 nextTick2
//nextTickl timeout1 nextTick2 timeout2
// node 11尽量和浏览器的表现相同