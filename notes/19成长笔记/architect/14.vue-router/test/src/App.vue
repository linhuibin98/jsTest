<template>
  <div id="app" class="container">
    <div class="row">
      <Navbar></Navbar>
      <router-view></router-view>
      <router-view name='email'></router-view>
      <router-view name='version'></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar
  }
}
</script>


<style lang="less">

</style>
