<template>
    <div class="main-container">
        <Nav/>

        <slot></slot>

    </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
export default {
    name: "Mainframe",
    components: {
        Nav,
    },
}
</script>

<style scoped>
.main-container {
    /* height: 100vh;
    overflow-x: hidden;
    overflow-y: scroll;
    background: url('../assets/images/bg4.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-origin: content-box;
    background-attachment: fixed; */
}
</style>