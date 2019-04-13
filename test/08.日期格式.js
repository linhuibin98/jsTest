let dateStr = '2019/1/25 11:35:33';
let dateArr = dateStr.split(/(\/+)| |:+/);
let arr = [];
for (let i = 0; i < dateArr.length; i++) {
    let item = dateArr[i];
    if (Number(item)) {
        arr.push(item);
    }
}
let template = '{1}年{2}月{3}日 {4}时{5}分{6}秒';
for (let i = 0; i < arr.length; i++) {
    template = template.replace(/\{\d\}/,arr[i]);  
}
console.log(template);

