let arr = [0,1,2,3,4,5];

let forwardOne = function (arr, index) {
    if (index <= 0 || index >= arrlength) return arr;
    arr.splice(index - 1, 0, arr[index]);
    arr.splice(index + 1, 1);
    return arr;
}

let forwardHead = function (arr, index) {
    if (index <= 0 || index >= arrlength) return arr;
    arr.splice(0, 0, arr[index]);
    //或者使用unshift,添加到数组最前面
    // arr.unshift(arr[index]);
    arr.splice(index + 1, 1);
    return arr;
}

let interchange = function (arr, index1, index2) {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) return arr;
    let flag = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = flag;
    return arr;
}
console.log(interchange(arr, 1, 3));

//借鉴============

// 传入数组索引是否合法
function isValidIndex(index, arr) {
    return /^\d+$/.test(index) && index < arr.length;
  }
  
  /**
  * 数组元素交换位置
  * @param {array} arr 数组
  * @param {number} index1 添加项目的位置
  * @param {number} index2 删除项目的位置
  * index1和index2分别是两个数组的索引值，即是两个要交换元素位置的索引值
  */
  function swapArray(arr, index1, index2) {
    if(!Array.isArray(arr)) return new Error('参数非法');
    if(!isValidIndex(index1, arr) || !isValidIndex(index2, arr)) return new Error('索引参数非法');
  
    arr[index1] = arr.splice(index2, 1, arr[index1])[0];
     return arr;
  }
  
  // 元素前移
  function moveForward(index, arr) {
    if(!Array.isArray(arr)) return new Error('参数非法');
    if(!isValidIndex(index, arr)) return new Error('索引参数非法');
    if(index === 0) return arr;
  
    return swapArray(arr, index, index - 1);
  }
  
  // 元素移动到最后一位
  function moveTop(index, arr) {
    if(!Array.isArray(arr)) return new Error('参数非法');
    if(!isValidIndex(index, arr)) return new Error('索引参数非法');
    let length = arr.length;
    if(index + 1 === length) return arr;
  
    for(let i = 0; i < length - 1 - index; i++) {
      swapArray(arr,index, index + 1);
      index++;
    }
    return arr;
  }
  
  // 元素移动到最前面
  function moveBottom(index, arr) {
    if(!Array.isArray(arr)) return new Error('参数非法');
    if(!isValidIndex(index, arr)) return new Error('索引参数非法');
    if(index === 0) return arr;
  
    for (let i = 0; i<index; i++) {
      swapArray(arr,index, index - 1);
      index--;
    }
    return arr;
  }

