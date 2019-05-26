<template>
  <div class="add">
    <input type="text">
  </div>
</template>

<script>
export default {
  beforeRouteLeave(to, from , next) {
    let flag = confirm('离开后当前输入信息将不被保存, 确认离开吗？');
    if (flag) {
      next();
    }
  }
}
</script>
