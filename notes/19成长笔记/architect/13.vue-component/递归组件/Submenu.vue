<template>
  <div>
    <div class="title" @click="change">
      <slot name='title'></slot>
    </div>
    <div class="submenu-item" v-show="flag">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Submenu', // name属性 可以用于递归
  data() {
    return {
      flag: false
    }
  },
  methods: {
    change() {
      this.flag = !this.flag;
    }
  }
}
</script>

<style scoped>
.submenu-item {
  padding-left: 10px;
}
</style>

