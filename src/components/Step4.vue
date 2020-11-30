<template>
  <div>
      <h2 class="white--text header-title mb-0">Contact Details</h2>
      <div class="header-sub-title mb-1">
          Please share your contact information with us. We respect your privacy.
      </div>
      <div class="d-flex justify-content--space-between">

          <div class="form-group">
            <span v-show="validInput('first_name')" class="valid_input_icon">
                <img :src="require('@/assets/stroke-1.png')" alt="">
            </span>
              <label>First name</label>
              <input type="text" v-model.trim="form.first_name" @keyup="updateForm" placeholder="John" class="input-field">
          </div>

          <div class="form-group">
              <span v-show="validInput('last_name')" class="valid_input_icon">
                <img :src="require('@/assets/stroke-1.png')" alt="">
            </span>
              <label>Last name</label>
              <input type="text" v-model.trim="form.last_name" @keyup="updateForm" placeholder="Appleseed" class="input-field">
          </div>

          <div class="form-group">
              <span v-show="validInput('phone_number')" class="valid_input_icon">
                <img :src="require('@/assets/stroke-1.png')" alt="">
            </span>
              <label>Phone Number</label>
              <input type="tel" placeholder="(123) 456 7890" @keyup="updateForm" class="input-field" v-model.trim="form.phone_number">
          </div>

          <div class="form-group">
              <span v-show="validInput('email') && validateEmail(form.email)" class="valid_input_icon">
                <img :src="require('@/assets/stroke-1.png')" alt="">
            </span>
              <label>Email Address</label>
              <input type="text" placeholder="me@company.com" @keyup="updateForm" v-model.trim="form.email" class="input-field">
          </div>

      </div>
      <div class="d-flex">
        <div class="p1">
            <label for="terms">
                <input id="terms" type="checkbox" v-model.trim="form.accepted_terms" @change="updateForm" class="input-field ml-1 mt-0 custom_checkbox">
                <span class="checkmark"></span>
            </label>
        </div>
        <div class="fs--sm flex--1 p-1 text--left">
            By checking this box, I confirm that I 
            (1) consent to the Terms of Application, Terms of Use, and receiving calls and messages, 
            including autodialed or pre-recorded calls for marketing purposes, from Janover Ventures and its participating partners using 
            the information you provided above, including via cell phone, 
            (2) acknowledge that no purchase of goods or services is contingent upon such consent, 
            (3) acknowledge that telephone calls to and from Janover Ventures or its partners may be recorded, 
            (4) consent to receive email correspondence including advertisements for business financing and other products or services, and 
            (5) acknowledge that you have read Janover Ventures' Privacy Policy and understand that you may opt out of receiving communications of your choice from Janover Ventures as provided in the Privacy Policy.
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data: () => ({
        form: {
            first_name: '',
            last_name: '',
            phone_number: '',
            email: '',
            accepted_terms: false
        },
    }),
    computed: {
        checkEmptyInput(){
            //CHECKING FOR THE EMPTY FIELDS
            if(
                (this.form.first_name && this.form.first_name !='') 
                && (this.form.last_name && this.form.last_name !='')
                && (this.form.email && this.form.email !='') 
                && (this.form.phone_number && this.form.phone_number != '')
                && this.form.accepted_terms
            ){
                return true
            }else return false
        }
    },
    methods: {
        updateForm(){
            //validate form input
            if(this.checkEmptyInput && this.validateEmail(this.form.email)){
                this.$emit('updateForm', { prop: "contactDetails", value: this.form})
            }else{
                this.$emit('updateForm', { prop: "contactDetails", value: null})
            }            
        },
        validInput(name){
            return (this.form[name] != '') ? true : false
        },
        validateEmail(email) {
            const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
           if(pattern.test(email)) {
               return true
           }else return false
        }
    }
}
</script>

<style>

</style>