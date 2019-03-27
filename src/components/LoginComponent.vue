<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row row-height">
        <div class="col-md-4"></div><!-- Empty -->
          <div class="col-md-4 login-box"> 
            <h3>{{message}}</h3>
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
              <button type="button" class="btn btn-success pull-right" v-on:click="login">Submit</button>
            </form> <!-- Form -->
          </div> <!-- Login box -->
        <div class="col-md-4"></div><!-- Empty -->
      </div> <!-- row -->
    </div> <!-- Cotnainer -->
  </div><!-- Container fluid -->
</template>

<script>
  export default {
    name: 'LoginComponent',
    props: [
      'showUsernameError',
      'showPasswordError',
      'inputUsernameError',
      'inputPasswordError',
      'message'
      ],
      methods: {
        login: function() {
          const app= this;
          app.$emit('clicked',this.username,this.password);
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
