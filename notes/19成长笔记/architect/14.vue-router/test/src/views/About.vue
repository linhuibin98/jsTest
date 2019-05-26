<template>
  <div>
    about
  </div>
</template>

<script>
export default {
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
