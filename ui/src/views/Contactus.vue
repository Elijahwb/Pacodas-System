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
                    <p>
                        Submit this form and our team will contact you soon.
                    </p>
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