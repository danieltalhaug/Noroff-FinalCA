<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

 // Set username and password
  (function () {
    localStorage.setItem('username', 'admin');
    localStorage.setItem('password', 'admin');
  })();

export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="scss">
// Variables

// SCSS
body {
    background-color: #eee;
  }
</style>
