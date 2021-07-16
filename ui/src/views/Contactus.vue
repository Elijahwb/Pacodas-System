<template>
    <MainFrame>
        <div class="container">
            <div class="row">
                <div class="col">
                    <p class="main-text">
                        Thanks for your interest 
                        <br/>in Pacodasug!
                    </p>
                    <p>Want to know more about Pacodasug organisation and ways of extending your help to those who need it?</p>
                    <div class="contact-details">
                        <div class="detail">
                            <font-awesome-icon :icon="['fas', 'map-marker-alt']" :style="{ color: 'rgb(248, 74, 26)' }"/>
                            <span>Makyindye Kampala, Uganda</span>
                        </div>
                        <div class="detail">
                            <font-awesome-icon :icon="['fas', 'address-card']" :style="{ color: 'rgb(248, 74, 26)' }"/>
                            <span>P.O. BOX 24477, Kampala Uganda</span>
                        </div>
                        <div class="detail">
                            <font-awesome-icon :icon="['fas', 'mobile']" :style="{ color: 'rgb(248, 74, 26)' }"/>
                            <span>+256 782 963 643 / +256 706 714 774</span>
                        </div>
                        <div class="detail">
                            <font-awesome-icon :icon="['fas', 'envelope']" :style="{ color: 'rgb(248, 74, 26)' }"/>
                            <span>info@pacodasug.org</span>
                        </div>
                        <div class="details">
                            <div class="socials">
                                <p>Social Presence</p>
                                <div class="platforms">
                                    <a target="_blank" href="#" class="social">
                                        <font-awesome-icon :icon="['fab', 'facebook']" :style="{ color: 'rgb(248, 74, 26)' }"/>
                                    </a>
                                    <a target="_blank" href="#" class="social">
                                        <font-awesome-icon :icon="['fab', 'instagram']" :style="{ color: 'rgb(248, 74, 26)' }"/>
                                    </a>
                                    <a target="_blank" href="#" class="social">
                                        <font-awesome-icon :icon="['fab', 'twitter']" :style="{ color: 'rgb(248, 74, 26)' }"/>
                                    </a>
                                    <a target="_blank" href="#" class="social">
                                        <font-awesome-icon :icon="['fab', 'whatsapp']" :style="{ color: 'rgb(248, 74, 26)' }"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <ContactForm/>
                </div>
            </div>
        </div>
    </MainFrame>
</template>
<script>
import MainFrame from '@/components/MainFrame.vue'
import ContactForm from '@/components/ContactForm.vue'

export default {
    name: 'Contactus',
    components: {
        MainFrame,
        ContactForm
    }
}
</script>

<style scoped>
.platforms {
    display: flex;
    justify-content: space-between;
}
.socials p {
    width: 100%;
    font-weight: bold;
    border-top: 1px solid black;
    margin-bottom: 1px;
}
.contact-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 15px;
}
.detail span {
    height: 100%;
    display: flex; 
    justify-content: center; 
    align-items:center;
    margin-left: 10px;
}
.detail {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}
.container {
    height: Calc(100vh - 84.94px);
}
.row {
    height: 100%;
}
.col {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.col:first-child {
    align-items: flex-start;
}
.container.preview {
    background-color: rgba(255, 255, 255, 0.5);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
}
.main-text {
    color: #2c2c2c;
    font-size: 40px;
    font-weight: bolder;
}
</style>