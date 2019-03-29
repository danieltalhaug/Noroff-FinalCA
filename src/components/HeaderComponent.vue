<template>
    <header class="header">
        <nav class="navbar navbar-default">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/"><h1 class="header__logo">MAGIC: The Gathering</h1></a>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li><router-link to="/cards">Home</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
    </header><!-- Header End -->
</template>
<script>
export default {
    name: 'HeaderComponent'
}
</script>

<style lang="scss" scoped>
// Scss
.header{
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 1.5em;
    padding: 10px;
    background: rgb(17,18,23);
    background: linear-gradient(0deg, rgba(17,18,23,1) 0%, rgba(19,20,25,1) 100%);
    color: #ffffff;
    border-bottom: 1px solid #3e3f43;
    &__logo {
        font-size: 1.8em;
        color: rgba(255,255,255,0.8);
        margin: 0px;
        &:hover {
            color: white;
            transition: 0.2s;
        }
    }
}
.navbar-nav{
    float: right;
}
.navbar-default{
    background-color: transparent;
    border: none;
}
.navbar-default .navbar-nav>li>a{
    color: rgba(255,255,255,0.8);
 &:hover {
     color: white;
    transition: 0.2s;
    }
}
</style>
