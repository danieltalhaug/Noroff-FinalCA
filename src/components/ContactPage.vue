<template>
<div>
    <HeaderComponent />
        <section>
            <div class="container container--white">
                <div class="row">
                    <div class="col-sm-12 title">
                        <h2>Contact us Form</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3"></div><!-- Empty -->
                    <div class="col-sm-6">
                        <form v-on:click.prevent>
                            <div class="form-group">
                                <label for="exampleInputEmail1">First name</label>
                                <input type="text" class="form-control" placeholder="First name">
                                <span class="error" v-if="showFnameError">Please enter a correct First name</span>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Last name</label>
                                <input type="text" class="form-control" placeholder="Last name">
                                <span class="error" v-if="showLnameError">Please enter a correct Last name</span>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Telephone number</label>
                                <input type="text" class="form-control" placeholder="555 459 1234">
                                <span class="error" v-if="showPhoneError">Please enter a correct Telephone number</span>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Email address</label>
                                <input type="text" class="form-control" placeholder="someone@example.com">
                                <span class="error" v-if="showEmailError">Please enter a correct Email address</span>
                            </div>
                            <button type="submit" class="btn btn--blue pull-right">Submit</button>
                        </form><!-- Form -->
                    </div>
                    <div class="col-sm-3"></div><!-- Empty -->
                </div><!-- Row end -->
            </div><!-- Container end -->
        </section>
    <FooterComponent />
</div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import FooterComponent from './FooterComponent.vue'

export default {
    name: 'ContactPage',
    components: {
        HeaderComponent,
        FooterComponent
    }
}
</script>

<style lang="scss" scoped>
// Variables
// Scss
.title {
    text-align: center;
    color: #0c8ed7;
}
.container--white {
    background-color: white;
    padding: 40px 20px 40px 20px;
}
.btn {
      &--blue {
        background-color: #0c8ed7;
        color: white;
        font-size: 1.2em;
      }&:hover {
        background-color: darken( #0c8ed7, 5% )
      }
    }
</style>

