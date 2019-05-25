<template>
<!-- 递归组件 iview -->
  <div id='app'>
    <Menu>
      <Resubmenu :children='children'></Resubmenu>
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
import Resubmenu from './Resubmenu.vue';

export default {
  data() {
    return {
      children: [
        {
          title: '菜单1',
          children: [
            {
              title: '1-1',
              children: [
                {
                  title: '1-1-1',
                  children: [
                    {
                      title: '1-1-1-1'
                    },
                    {
                      title: '1-1-1-2'
                    },
                  ]
                },
                {
                  title: '1-1-2'
                },
              ]
            },
            {
              title: '1-2'
            },
            {
              title: '1-3'
            }
          ]
        },
        {
          title: '菜单2'
        },
        {
          title: '菜单3'
        }
      ]
    }
  },
  components: {
    Menu,
    MenuItem,
    Submenu,
    Resubmenu
  }
}
</script>

<style scoped>
  #app {
    color: red;
  }
</style>
