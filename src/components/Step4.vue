<template>
  <div>
      <h2 class="white--text header-title mb-0">Contact Details</h2>
      <div class="header-sub-title mb-1">
          Please share your contact information with us. We respect your privacy.
      </div>
      <div class="d-flex justify-content--space-between">

          <div class="form-group">
              <label>First name</label>
              <input type="text" v-model="form.first_name" @keyup="updateForm" placeholder="John" class="input-field">
          </div>

          <div class="form-group">
              <label>Last name</label>
              <input type="text" v-model="form.last_name" @keyup="updateForm" placeholder="Appleseed" class="input-field">
          </div>

          <div class="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="(123) 456 7890" @keyup="updateForm" class="input-field" v-model="form.phone_number">
          </div>

          <div class="form-group">
              <label>Email Address</label>
              <input type="text" placeholder="me@company.com" @keyup="updateForm" v-model="form.email" class="input-field">
          </div>

      </div>
      <div class="d-flex">
        <div class="p1">
            <input type="checkbox" v-model="form.accepted_terms" @click="updateForm" class="input-field ml-1">
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
        }
    }),
    methods: {
        updateForm(){
            this.$emit('updateForm', { prop: "contactDetails", value: this.form})
        }
    }
}
</script>

<style>

</style>