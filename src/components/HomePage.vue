<template>
    <div>
        <Header /><!-- Header -->
        
        <Footer /><!-- Footer -->
    </div>
</template>

<script>
import Footer from './FooterComponent.vue'
import Header from './HeaderComponent.vue'
import About from './AboutPage.vue'
import Contact from './ContactPage.vue'

export default {
    name: 'HomePage',
    components: {
        Header,
        Footer,
        About,
        Contact
  }
}
</script>

<style lang="scss">
// Variables
$grey: #ced4da;
$border-radius: 5px;
$error-red: #ff5b5b;
// SCSS

</style>
