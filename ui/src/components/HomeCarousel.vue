<template>
    <div class="slide-container">
        <div class="slide">
            <div class="slide-content">
                <img src="../assets/images/bg2.jpg" alt="">
                <div class="caption-area">
                    <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam porro placeat aliquam voluptates exercitationem, 
                        laboriosam debitis repellat sit qui explicabo! Non id aperiam, quo vero nemo facilis. Aliquid, doloribus assumenda!</p>
                </div>
            </div>
        </div>
        <div class="slide">
            <div class="slide-content">
                <img src="../assets/images/bg4.jpg" alt="">
                <div class="caption-area">
                    <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam porro placeat aliquam voluptates exercitationem, 
                        laboriosam debitis repellat sit qui explicabo! Non id aperiam, quo vero nemo facilis. Aliquid, doloribus assumenda!</p>
                </div>
            </div>
        </div>
        <div class="slide">
            <div class="slide-content">
                <img src="../assets/images/bg1.jpg" alt="">
                <div class="caption-area">
                    <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam porro placeat aliquam voluptates exercitationem, 
                        laboriosam debitis repellat sit qui explicabo! Non id aperiam, quo vero nemo facilis. Aliquid, doloribus assumenda!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeCarousel'
}
</script>

<style scoped>
.hide {
    z-index: -1;
}
.slide-container {
    position: relative;
    height: Calc(100vh - 84.94px);
    width: 100vw;
}
.slide {
    width: 100%;
    height: 100%;
    position: absolute;
}
.slide-content {
    width: 100% !important;
    height: 100% !important;
    position: relative;
}
.slide-content img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    position: absolute;
}
 .caption-area {
    position: absolute !important;
    width: 100% !important;
    height: 100% !important;
    display: flex;
    justify-content: center;
    align-items: center;
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