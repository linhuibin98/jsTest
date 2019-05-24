
let obj = {
  name: 'linhuibin',
  age: 18
}

// vue 数据劫持 Object.definedProperty

function observe(obj) {
  if (typeof obj === 'object') {
    for (let key in obj) {
      defineReactive(obj, key, obj[key]);
    }
  }
}

function defineReactive(obj, key, value) {
  observe(value);  // 若value值还是一个对象, 进行递归,深层劫持
  Object.defineProperty(obj, key, {
    get() {
      return value;
    },
    set(val) {
      observe(val); // 若修改后的值为 Object, 继续监听
      console.log('数据更新了....', val);
      value = val;
    }
  })
}

observe(obj);

// Object.defineProperty 不支持数组
// vue 中所有数组方法都重写了 

obj.name = 'lllll';
obj.age = '222'
obj.name = 'hhh'
