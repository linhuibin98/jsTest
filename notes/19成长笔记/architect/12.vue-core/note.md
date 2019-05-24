- 组件间的信息传递
1. props和$emit 父组件向子组件传递数据是通过prop传递的，子组件传递数据给父组件是通过$emit发布事件, $on订阅事件
2. $attrs和$isteners A->B->C。Vue 2.4开始提供了$attrs和$listeners来解决这个问题
3. $parent，$childrem智能组件木偶组件
4. $refs获取实例
5. 父组件中通过provider来提供变量，然后在子组件中通过inject来注入变量。
6. envetBus 平级组件数据传递这种情况下可以使用中央事件总线的方式
7. vuex状态管理