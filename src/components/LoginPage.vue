<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row row-height">
        <div class="col-md-4"></div><!-- Empty -->
          <div class="col-md-4 login-box"> 
            <form>
              <div class="form-group">
                <label>Email address</label>
                <input type="text" class="form-control" placeholder="Username" v-model="username" v-bind:class="{ 'error-border': inputUsernameError }">
                <span class="error" v-if="showUsernameError">Please enter a correct username</span>
              </div>
              <div class="form-group">
                <label>Password</label>
                <input type="text" class="form-control" placeholder="Password" v-model="password" v-bind:class="{ 'error-border': inputPasswordError }">
                <span class="error" v-if="showPasswordError">Please enter a correct Password</span>
              </div>
              <button type="button" class="btn" v-on:click="login">Submit</button>
            </form> <!-- Form -->
          </div> <!-- Login box -->
        <div class="col-md-4"></div><!-- Empty -->
      </div> <!-- row -->
    </div> <!-- Cotnainer -->
  </div><!-- Container fluid -->
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
      login: function() {
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
