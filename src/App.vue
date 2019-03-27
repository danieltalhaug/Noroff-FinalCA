<template>
  <div id="app">
    <LoginPage />
  </div>
</template>

<script>
import LoginPage from './components/LoginPage.vue'
import HomePage from './components/HomePage.vue'

export default {
  name: 'app',
  components: {
    LoginPage,
    HomePage
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
