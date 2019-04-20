// 求 数组中任意相连项相加的最大值

const arr = [10, -5, 12, 1, 6, -1, 2, -5];

/**
 * 
 * @param {Number []} arr 
 * return Number
 */

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