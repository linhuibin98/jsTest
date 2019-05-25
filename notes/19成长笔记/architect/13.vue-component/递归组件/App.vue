<template>
<!-- 递归组件 iview -->
  <div id='app'>
    <Menu>
      <MenuItem>菜单1</MenuItem>
      <MenuItem>菜单2</MenuItem>
      <MenuItem>菜单3</MenuItem>
      <Submenu>
        <template #title>
          <MenuItem>菜单4</MenuItem>
        </template>
        <menu-item>4-1</menu-item>
        <menu-item>4-2</menu-item>
        <menu-item>4-3</menu-item>
      </Submenu>
    </Menu>
  </div>
</template>

<script>
import Menu from './Menu.vue';
import MenuItem from './MenuItem.vue';
import Submenu from './Submenu.vue';

export default {
  data() {
    return {
      msg: 'hello'
    }
  },
  components: {
    Menu,
    MenuItem,
    Submenu
  }
}
</script>

<style scoped>
  #app {
    color: red;
  }
</style>
