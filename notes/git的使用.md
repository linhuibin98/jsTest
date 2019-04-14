打开git Bash Here
### 创建SSH Key
```javascript
ssh-keygen -t rsa -C "注册邮箱"
```

### 切换识别秘钥
```javascript
ssh-agent bash
ssh-add 秘钥地址
```

### 初始化本地仓库 
```javascript
git init     //初始化
git add .        //跟踪文件
git status       //查看文件状态
git commit -m "这里填写注释(如初始化仓库)"       //本地提交
```

### 仓库建立联系
```javascript
git remote add origin 仓库地址
git remote rm origin  删除
```

### 下载到本地
```javascript
git clone ssh地址
```
### 推送到云端
```javascript
git remote add origin 仓库ssh地址 //仓库建立联系
git status  //检查状态
git add .  //保存到暂存区（缓冲区）
git commit -m '本次提交描述' //将暂存区修改内容提交至本地仓库中，若文件未添加至暂存区，则提交时不会提交任何修改
git push  //推到线上仓库
```

### 添加分支
```
git pull   //拉下更新的分支内容
git checkout index-swiper(分支名)   //选择分支
```

### 查看分支
```javascript
git bransh -a  //查看所有分支
```