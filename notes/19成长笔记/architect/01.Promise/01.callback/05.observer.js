/*
观察者 和 被观察者      被观察者要存放在观察者中   
被观察者提供一个更新方法, 当被观察者的数据发生变化时, 需要执行观察者的 update方法

*/

//被观察者
function Observer() {
  this.state = '不开心...';
  this._arr = []; //观察者集合
}

Observer.prototype.attach = function (s) { //注册观察者
  this._arr.push(s);
}

Observer.prototype.setState = function (newState) {
  this.state = newState;
  this._arr.forEach(s => s.update(this.state));
}

//观察者
function Subject(name, target) {
  this.name = name;
  this.target = target;
}

Subject.prototype.update = function (newState) {
  console.log(this.name + '监控到了' + newState + '变化');
}


let o = new Observer();
let s1 = new Subject('主人', o);
let s2 = new Subject('媳妇', o);
o.attach(s1);
o.attach(s2);

o.setState('开心的');