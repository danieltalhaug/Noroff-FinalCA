<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row row-height">
        <div class="col"></div><!-- Fake column -->
        <div class="col login-box">
        <form>
          <h3>{{message}}</h3>
          <div class="form-group">
            <label >Username</label>
            <input type="text" class="form-control" placeholder="Username" v-model="username" v-bind:class="{ 'error-border': inputUsernameError }">
            <span class="error" v-if="showUsernameError">Please enter a correct username</span><!-- Error text -->
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="text" class="form-control" placeholder="Password" v-model="password" v-bind:class="{ 'error-border': inputPasswordError }">
            <span class="error" v-if="showPasswordError">Please enter a correct Password</span><!-- Error text -->
          </div>
          <div class="form-check">
          </div>
          <button type="button" v-on:click="login" class="btn btn-primary float-right">Submit</button>
        </form><!-- Form end -->
        </div><!-- Login column end -->
        <div class="col"></div><!-- Fake column -->
      </div><!-- Row end -->
    </div><!-- Container end -->
  </div><!-- Fluid-container end -->
</template>

<script>
  // Set username and password
  (function () {
    localStorage.setItem('username', 'admin');
    localStorage.setItem('password', 'admin');
  })();

  export default {
    name: 'LoginPage',
    data: {
      message: 'Please log in',
      username: '',
      password: '',
      showUsernameError: false,
      showPasswordError: false,
      inputUsernameError: false,
      inputPasswordError: false
    },
    methods: {
      login: function(e) {
        if(this.username !== localStorage.getItem("username") || this.password !== localStorage.getItem("password")) {
          if(this.username !== localStorage.getItem("username")){
            this.message = 'Please enter correct login details';
            this.showUsernameError = true;
            this.inputUsernameError = true;
          } else {
            this.showUsernameError = false;
            this.inputUsernameError = false; 
          }
          if(this.password !== localStorage.getItem("password")) {
            this.showPasswordError = true;
            this.inputPasswordError = true;
          } else {
            this.showPasswordError = false;
            this.inputPasswordError = false; 
          }
        } else {
          this.message = "welcome back" + this.username;
          this.showPasswordError = false;
          this.showUsernameError = false;
          this.inputUsernameError = false;
          this.inputPasswordError = false;
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
    background-color: #eee;
  }
  .row-height {
    padding-top: 200px;
  }
  .login-box {
    border-radius: $border-radius;
    border: 1px solid $grey;
    background-color: white;
    padding: 40px;
    box-shadow: 0 5px 10px $grey;
  }
  .error {
    color: $error-red;
    &-border {
    border: 1px solid $error-red;
    }
  }
</style>
