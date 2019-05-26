<template>
  <div class="user">
    <ul class="list-group">
      <router-link tag="li" class='list-group-item' to='/user/info'>用户信息</router-link>
      <router-link  tag="li" class='list-group-item' to='/user/add'>增加用户</router-link>
    </ul>
    <div class="user-info">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user',
  beforeRouteEnter (to, from, next) {
    let login = localStorage.getItem('login');
    if (to.matched.some(item => item.meta.isLogin)) {
      if (login === 'false') {
        confirm('需要登录...');
        next({
          path: '/login'
        })
      }else {
        next();
      }
    } else {
      next();
    }
  }
}
</script>

<style scope>
  .user {
    text-align: center;
  }
  .list-group {
    width: 22%;
    float: left;
  }
  .user-info {
    float: left;
    padding-left: 50px;
  }
</style>
