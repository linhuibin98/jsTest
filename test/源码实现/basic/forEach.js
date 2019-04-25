let arr = ['l', 'h', 'b', 4, 5, 6];

function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

forEach(arr, function (item, index, arr) {
  console.log(index, '=>', item, '=>', arr);
})