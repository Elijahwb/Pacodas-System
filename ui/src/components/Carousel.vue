<template>
    <div class="slide-container">
        <vueper-slides 
        autoplay 
        fade 
        transition-speed="1300"
        :touchable="true"
        :pause-on-hover="pauseOnHover"
        >
            <vueper-slide
                duration="10000"
                v-for="(slide, i) in slides"
                :key="i"
                :image="slide.image"
                :title="slide.title"
                :content="slide.content" />
            </vueper-slides>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
    name: "homecarousel",
    components: { VueperSlides, VueperSlide },
    data: () => ({
        slides: [
            {
                content: `
                    <div style="width: 100%; display:flex; justify-content:center">
                        <p style="width: 40%;
                            color: #fff;
                            padding: 20px 10px;
                            text-align: center;
                            background-color: rgba(0, 0, 0, 0.1);
                            -webkit-backdrop-filter: blur(10px);
                            backdrop-filter: blur(10px);">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam porro placeat aliquam voluptates exercitationem, 
                            laboriosam debitis repellat sit qui explicabo! Non id aperiam, quo vero nemo facilis. Aliquid, doloribus assumenda!
                        </p>
                    </div>
                `,
                image: require('@/assets/images/bg1.jpg')
            },
            {
                content: `
                    <div style="width: 100%; display:flex; justify-content:center">
                        <p style="width: 40%;
                            color: #fff;
                            padding: 20px 10px;
                            text-align: center;
                            background-color: rgba(0, 0, 0, 0.1);
                            -webkit-backdrop-filter: blur(10px);
                            backdrop-filter: blur(10px);">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam porro placeat aliquam voluptates exercitationem, 
                            laboriosam debitis repellat sit qui explicabo! Non id aperiam, quo vero nemo facilis. Aliquid, doloribus assumenda!
                        </p>
                    </div>
                `,
                image: require('@/assets/images/bg2.jpg')
            },
            {
                content: `
                    <div style="width: 100%; display:flex; justify-content:center">
                        <p style="width: 40%;
                            color: #fff;
                            padding: 20px 10px;
                            text-align: center;
                            background-color: rgba(0, 0, 0, 0.1);
                            -webkit-backdrop-filter: blur(10px);
                            backdrop-filter: blur(10px);">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam porro placeat aliquam voluptates exercitationem, 
                            laboriosam debitis repellat sit qui explicabo! Non id aperiam, quo vero nemo facilis. Aliquid, doloribus assumenda!
                        </p>
                    </div>
                `,
                image: require('@/assets/images/bg4.jpg')
            },
]
    })
}
</script>

<style scoped>
.slide-container {
    position: relative;
    height: Calc(100vh - 84.94px);
    width: 100vw;
}
.vueperslides {
    width: 100%;
    height: 100%;
}
.description {
    width: 28%;
    color: #fff;
    padding: 20px 10px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.1);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
}
</style>