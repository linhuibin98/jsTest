// 求 数组中任意相连项相加的最大值
// 最大子串和

const arr = [10, -5, 12, 1, 6, -1, 2, -5];

/**
 * 
 * @param {Number []} arr 
 * return Number
 */

 // 方法一：
/*

function maxSubArray (arr) {
  let max = 0,
      thisSum = 0;

  for (let i = 0, len = arr.length; i < len; i++) {
    thisSum = 0;
    for (let j = i; j < len; j++) {
      thisSum += arr[j];
      if (thisSum > max) {
        max = thisSum;
      }
    }
  }
  return max;
}

console.log(maxSubArray(arr)); // 25

*/

// 方法二

function maxSubArray (arr) {
  let thisSum =0,
      max = 0;
  
  for (let i = 0; i < arr.length; i++) {
    thisSum += arr[i];
    if (thisSum > max) {
      max = thisSum;
    } else if (thisSum < 0) {
      thisSum = 0;
    }
  }
  return max; 
}

console.log(maxSubArray(arr)); // 25