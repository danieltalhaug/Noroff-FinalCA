<template>
    <LoginComponent v-bind:showUsernameError="showUsernameError"
                    v-bind:showPasswordError="showPasswordError"
                    v-bind:inputUsernameError="inputUsernameError"
                    v-bind:inputPasswordError="inputPasswordError"
                    v-bind:message="message"
                    @clicked="onClickChild"
    />
</template>

<script>
import LoginComponent from './LoginComponent.vue'

export default {
    name: 'HomePage',
    components: {
        LoginComponent
    },
    data() {
        return {
            message: 'Welcome, please log in',
            showUsernameError: false,
            showPasswordError: false,
            inputUsernameError: false,
            inputPasswordError: false
        }
    },
    methods: {
      onClickChild(username, password) {
          if(username !== localStorage.getItem("username") || password !== localStorage.getItem("password")) {
              if(username !== localStorage.getItem("username")) {
                  this.message = 'Please enter correct login details';
                  this.showUsernameError = true;
                  this.inputUsernameError = true;
              } else {
                  this.showUsernameError = false;
                  this.inputPasswordError = false;
              }
              if(password !== localStorage.getItem("password")) {
                  this.message = 'Please enter correct login details';
                  this.showPasswordError = true;
                  this.inputPasswordError = true;
              } else {
                  this.showPasswordError = false;
                  this.inputPasswordError = false; 
              }
          } else {
              this.$router.push({name: 'cards'});
          }
      }
    }
  }
</script>

<style lang="scss">
// Variables
$grey: #ced4da;
$border-radius: 5px;
$error-red: #ff5b5b;
// SCSS
body {
  background-color: #001741;
}
</style>
