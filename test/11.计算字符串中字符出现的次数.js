//计算字符串中某字符出现的次数

//方法一： 利用对象的映射 特性来计数

/**
 * @parameter  str : 传入的需要被检测的字符串
 * @parameter  s : 检测的字符
 */
function  computerNum (str, s) {
  let map = {}; //利用对象的映射,分开str中的字符
  for (let i = 0, len = str.length; i < len; i++) {
    if (map[str[i]]) { //判断字符是不是第一次保存, map[str[i]] 可以优化为 map[s]
      map[str[i]]++;
    } else { // 第一次保存赋值为1
      map[str[i]] = 1;
    }
  }
  return map[s] ? map[s] : 0;   // 不存在就返回 0
}

let str = 'sassadffdsdsawd';

console.log(computerNum(str, 'a')); // 3
console.log(computerNum(str, 's')); // 5
console.log(computerNum(str, 'd')); // 4
console.log(computerNum(str, 'p')); // 0

//方法二