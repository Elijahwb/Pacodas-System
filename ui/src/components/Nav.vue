<template>
    <header>
        <router-link to="/">
        <div class="logo">
            <img src="../assets/images/logo2.jpg" alt="">
        </div>
        </router-link>
        <ul class="nav">
            <li class="nav-link">
                <router-link to="/"><span>HOME</span></router-link>
            </li>
            <li class="nav-link">
                <router-link to="what-we-do"><span>WHAT WE DO</span></router-link>
            </li>
            <li class="nav-link">
                <router-link to="services"><span>SERVICES</span></router-link>
            </li>
            <li class="nav-link">
                <router-link to="about-us"><span>ABOUT US</span></router-link>
            </li>
            <li class="nav-link">
                <router-link to="contact-us"><span>CONTACT US</span></router-link>
            </li>
            <li class="nav-link">
                <router-link to="donate"><span class="donate-btn">DONATE</span></router-link>
            </li>
        </ul>
    </header>
</template>

<style scoped>
header {
    padding: 15px 8px;
    display: flex;
    font-size: 13PX;
    justify-content: space-between;
    align-items: center;
    box-shadow: 5px 5px 10px rgba(0,0,0,.1);
}
.logo img{
    width: 170px;
}
.nav {
    margin-top: 10px;
    margin-right: 20px;
}
.nav-link a{
    color: #282c35;
    font-weight: 400;
    text-decoration: none !important;
}
.nav-link a:hover {
    opacity: .8;
}
.router-link-exact-active {
    color: #282c35 !important;
    font-weight: 500 !important;
}
.router-link-exact-active .donate-btn{
    font-weight: 400;
}
.donate-btn {
    transition: 100ms ease-in;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(248, 74, 26);
    border: 1.5px solid rgb(248, 74, 26);
    padding: 5px 20px;
    border-radius: 12px;
    color: #fff;
    margin-top: -6.5px;
    margin-left: 10px;
}
.donate-btn:hover {
    background: #fff;
    color: #fc8f08;
}
</style>