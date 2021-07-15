<template>
    <MainFrame>
        <Carousel/>
    </MainFrame>
</template>
<script>
import MainFrame from '@/components/MainFrame.vue'
import Carousel from '@/components/HomeCarousel.vue'
export default {
    name: 'Home',
    components: {
        MainFrame,
        Carousel
    },
    methods: {
        changeslide(event){
            console.log(event.target);
        }
    }
}
</script>

<style scoped>
.container.preview {
    background-color: rgba(255, 255, 255, 0.5);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
}
</style>