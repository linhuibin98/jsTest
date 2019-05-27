<template>
  <div>
    <Input type="text" placeholder="请输入用户名" style="width: 300px"/>
    <Button type="primary">登录</Button>
  </div>
</template>

<script>
  import { getUser } from '../api/user';

  export default {
    async mounted() {
      let res = await getUser();
      console.log(res);
    }
  }
</script>