<template>
    <MainFrame>
        <div class="container">
            <h2>Landing Page</h2>
        </div>
    </MainFrame>
</template>
<script>
import MainFrame from '@/components/MainFrame.vue'

export default {
    name: 'Home',
    components: {
        MainFrame,
    }
}
</script>

<style scoped>
.container {
    height: 130vh;
    background: #fff;
}
</style>