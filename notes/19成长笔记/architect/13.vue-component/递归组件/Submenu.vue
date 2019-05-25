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
