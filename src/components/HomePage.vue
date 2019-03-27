<template>
    <div>
        <Header /><!-- Header -->
        
        <Footer /><!-- Footer -->
    </div>
</template>

<script>
import Footer from './Footer.vue'
import Header from './Header.vue'
import About from './About.vue'
import Contact from './Contact.vue'

export default {
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
