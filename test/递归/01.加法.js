/*
  例： 从1 加到 100 的和 ，start = 1， end = 100
 *start:
  end:   
 * 
 */
let add = function (start, end) {
  if (start >= end) return start;
  return start + add(start +1, end);
}

console.log(add(1, 100)); // 5050