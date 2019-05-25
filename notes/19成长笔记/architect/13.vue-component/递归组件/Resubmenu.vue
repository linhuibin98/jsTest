<template>
  <div class="re-submenu">
    <template v-for="(item, index) in children">
      <Submenu :key='item+index'>
        <template #title>
          <MenuItem>{{item.title}}</MenuItem>
        </template>
        <Resub :key='item.title' :children='item.children'></Resub>
      </Submenu>
    </template>
  </div>
</template>

<script>
import Submenu from './Submenu.vue';
import MenuItem from './MenuItem.vue';

export default {
  name: 'Resub',
  props: {
    children: {
      type: Array,
      default: () => ([])
    }
  },
  components: {
    Submenu,
    MenuItem
  }
}
</script>
