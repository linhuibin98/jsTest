<template>
  <div>
    <Input type="text" placeholder="请输入用户名" v-model="username" style="width: 300px"/>
    <Button type="primary" @click="login">登录</Button>
  </div>
</template>

<script>
  import { getUser } from '../api/user';
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        username: ''
      }
    },
    async mounted() {
      let res = await getUser();
    },
    methods: {
      ...mapActions(['toLogin']),
      login() {
        this.toLogin(this.username).then(() => {
          this.$Message.success('登录成功');
          this.$router.push('/');
        }, (err) => {
          this.$Message.error(err);
        })
      }
    },
  }
</script>