<template>
    <header>
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
                <a class="navbar-brand" href="/"> <h1><i class="fa fa-gamepad" aria-hidden="true"></i> Card Game</h1></a>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="">Home</a></li>
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

<style lang="scss">
// Variables

// Scss
header{
    padding: 10px;
    background-color: #3a99cd;
    color: #ffffff;
    margin-bottom: 30px;
}
.navbar-default{
    background-color: transparent;
    border: none;
    color: white;
}
header h1{
    display: inline-block;
    color: #ffffff;
}
header i{
    display: inline-block;
    font-size: 30px;
    color: #ffffff;
}
.navbar-nav{
    float: right;
}
.navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover{
    background-color: transparent;
    color: #ffffff;
    border-bottom: solid 3px white;

}
section{
    min-height: 750px;
}
.navbar-default .navbar-nav>li>a{
    color: white;
}
input[type="text"]{
    width: 100%;
    border: solid 1px lightgrey;
    height: 45px;
    padding: 10px;
    outline: none;
}
.m-t-30{
    margin-top: 30px;
}
.relative{
    position: relative;
}
.float-right{
    float: right;
}
.card-container{
    border: solid 1px lightgrey;
    border-top: 10px solid #3a99cd;
    margin-top: 30px;
    margin-left: 5px;
    padding: 15px;
}
.card-container:hover{
        box-shadow: 5px 5px 2.5px #888888;
        cursor: pointer;
}
.col-sm-12{
    padding: 0px;
}
img{
    border-radius: 10px;
}
h1{
    margin: 0px;
}
h4{
    color: #3a99cd;
}
.error{
    color: red;
    display: none;
}
</style>
