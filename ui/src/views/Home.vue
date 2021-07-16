<template>
    <MainFrame>
        <div style="height: 100vh; width: 100%; overflow-x: hidden">
            <Carousel/>
        </div>
    </MainFrame>
</template>
<script>
import MainFrame from '@/components/MainFrame.vue'
import Carousel from '@/components/Carousel.vue'
export default {
    name: 'Home',
    components: {
        MainFrame,
        Carousel
    },
}
</script>

<style scoped>
.container.preview {
    background-color: rgba(255, 255, 255, 0.5);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
}
</style>