<template>
  <div>
      <h2 class="white--text header-title mb-0">Loan Amount</h2>
      <div class="header-sub-title mb-1">
          What is the approximate loan amount?
          <br>
          If you aren't entirely sure, please make your best educated guess.
      </div>
      <div class="d-flex align-items--center justify-content--center">
        <div class="grey--text form-group text--center">
            <label for="loan_amount" class="text--grey ">
            <input id="loan_amount" class="input-field" placeholder="$" v-model="loan_amount" @keyup="updateForm" type="number"></label>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data: () => ({
        loan_amount: 0
    }),
    methods: {
        updateForm(){
            this.$emit('updateForm', { prop: "loanAmount", value: this.loan_amount})
        }
    }
}
</script>

<style>

</style>