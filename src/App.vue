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

<style lang="scss" >
* {
  font-family: 'Poppins', sans-serif;
}
h1, h2, h3, h4, {
  font-family: 'Germania One', cursive;
}
</style>
