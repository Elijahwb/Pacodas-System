<template>
  <div class="form-container">
    <form action="">
        <div class="name-section">
            <div class="form-item firstname">
                <label for="">First name</label>
                <input type="text" class="form-control">
            </div>
            <div class="form-item">
                <label for="">Last name</label>
                <input type="text" class="form-control">
            </div>
        </div>
        
        <div class="email-section">
            <label for="">Email</label>
            <input type="email" class="form-control">
        </div>

        <div class="email-section">
            <label for="">Message</label>
            <textarea name="" id="" cols="30" rows="5" class="form-control"></textarea>
        </div>

        <div class="submit">
            <input type="submit" @click="onSubmit" class="form-control" value="Send message">
        </div>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style scoped>
.form-container {
    border-radius: 8px;
    box-shadow: -1px -1px 20px rgba(172, 78, 52, 0.219), 40px 40px 40px rgba(172, 78, 52, 0.219);
    padding: 20px;
}
form > div {
    padding: 10px 0px;
}
.name-section {
    display: flex;
    justify-content: space-between;
}
.firstname {
    margin-right: 20px !important;
}
textarea {
    width: 100%;
    resize: none;
}
.submit input {
    width: 100%;
    font-size: 13.5px;
    font-weight: 500;
    padding: 5px 0px;
    background: rgb(248, 74, 26);
    color: #FFF;
}
.form-control {
    padding: 2px 10px;
}
.form-control:focus {
    border: 1px solid rgba(172, 78, 52, 0.219);
    box-shadow: 0.5px 0.5px 2px rgba(172, 78, 52, 0.219), -0.5px -0.5px 2px rgba(172, 78, 52, 0.219);
}
label {
    font-size: 13.5px;
    font-weight: 500;
    color: #2c2c2c;
    margin-bottom: 1px;
}
.logo-color {
    color: #ac4e34;
}
</style>